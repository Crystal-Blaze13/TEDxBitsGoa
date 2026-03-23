'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidEtherProps {
  colors?: string[];
  mouseForce?: number;
  cursorSize?: number;
  resolution?: number;
  dt?: number;
  BFECC?: boolean;
  isViscous?: boolean;
  autoDemo?: boolean;
  autoSpeed?: number;
  autoIntensity?: number;
  autoResumeDelay?: number;
  autoRampDuration?: number;
  takeoverDuration?: number;
  style?: React.CSSProperties;
}

export default function LiquidEther({
  colors = ['#0A0604', '#8B1A1A', '#C8860A', '#1A0A04'],
  mouseForce = 18,
  cursorSize = 120,
  resolution = 0.4,
  dt = 0.012,
  BFECC = true,
  isViscous = false,
  autoDemo = true,
  autoSpeed = 0.18,
  autoIntensity = 1.6,
  autoResumeDelay = 800,
  autoRampDuration = 1.2,
  takeoverDuration = 0.3,
  style = { width: '100%', height: '100%' }
}: LiquidEtherProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const webglRef = useRef<any>(null);
  const isVisibleRef = useRef(true);
  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const resizeRafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
  if (!container) return;

  container.style.position = 'relative';
  container.style.overflow = 'hidden';

  let webgl: any = null;
  let cancelled = false;

  const startWebGL = () => {
    if (cancelled || !containerRef.current) return;
    
    try {
      // Initialize Three.js scene
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance"
      });
      
      // Ensure container has dimensions before setting renderer size
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `;

      const fragmentShader = `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform vec2 u_velocity;
        uniform float u_force;
        uniform vec3 u_color1;
        uniform vec3 u_color2;
        uniform vec3 u_color3;
        uniform vec3 u_color4;
        uniform bool u_viscous;
        
        varying vec2 vUv;
        
        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        float smoothNoise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          
          float a = noise(i);
          float b = noise(i + vec2(1.0, 0.0));
          float c = noise(i + vec2(0.0, 1.0));
          float d = noise(i + vec2(1.0, 1.0));
          
          vec2 u = f * f * (3.0 - 2.0 * f);
          
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        
        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 0.0;
          
          for (int i = 0; i < 4; i++) {
            value += amplitude * smoothNoise(st);
            st *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }
        
        void main() {
          vec2 st = gl_FragCoord.xy / u_resolution;
          vec2 mouse = u_mouse / u_resolution;
          vec2 velocity = u_velocity / u_resolution;
          
          float dist = distance(st, mouse);
          float influence = 1.0 - smoothstep(0.0, u_force / u_resolution.x, dist);
          
          vec2 flow = vec2(
            sin(u_time * 0.5 + st.x * 10.0) * 0.1,
            cos(u_time * 0.3 + st.y * 10.0) * 0.1
          );
          
          flow += velocity * influence * 2.0;
          
          float noise1 = fbm(st * 3.0 + u_time * 0.1 + flow * 0.5);
          float noise2 = fbm(st * 6.0 - u_time * 0.15 + flow);
          float noise3 = fbm(st * 12.0 + u_time * 0.2 + flow * 1.5);
          
          float fluid = noise1 * 0.6 + noise2 * 0.3 + noise3 * 0.1;
          fluid = smoothstep(0.2, 0.8, fluid);
          
          if (u_viscous) {
            fluid = pow(fluid, 2.0);
          }
          
          vec3 color = mix(u_color1, u_color2, fluid);
          color = mix(color, u_color3, fluid * fluid);
          color = mix(color, u_color4, smoothstep(0.7, 1.0, fluid));
          
          float glow = influence * 0.3;
          color += vec3(glow * 0.2, glow * 0.1, glow * 0.05);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `;

      // Create shader material
      const material = new THREE.ShaderMaterial({
        uniforms: {
          u_time: { value: 0 },
          u_resolution: { value: new THREE.Vector2(width, height) },
          u_mouse: { value: new THREE.Vector2() },
          u_velocity: { value: new THREE.Vector2() },
          u_force: { value: cursorSize },
          u_color1: { value: new THREE.Color(colors[0]) },
          u_color2: { value: new THREE.Color(colors[1]) },
          u_color3: { value: new THREE.Color(colors[2]) },
          u_color4: { value: new THREE.Color(colors[3]) },
          u_viscous: { value: isViscous }
        },
        vertexShader,
        fragmentShader
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const mouse = new THREE.Vector2();
      const velocity = new THREE.Vector2();
      let lastTime = performance.now();
      let autoTime = 0;
      let isInteracting = false;
      let autoTimeout: NodeJS.Timeout | null = null;

      // Store webgl-like object for compatibility
      webgl = {
        scene,
        camera,
        renderer,
        material,
        geometry,
        mesh,
        mouse,
        velocity,
        lastTime,
        autoTime,
        isInteracting,
        autoTimeout,
        start: () => {
          const animate = () => {
            if (!containerRef.current) return;
            
            const currentTime = performance.now();
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;
            
            // Auto demo movement
            if (autoDemo && !isInteracting && containerRef.current) {
              autoTime += deltaTime * autoSpeed;
              
              const demoX = Math.sin(autoTime) * 0.3 + 0.5;
              const demoY = Math.cos(autoTime * 0.7) * 0.3 + 0.5;
              
              const containerWidth = containerRef.current.clientWidth || window.innerWidth;
              const containerHeight = containerRef.current.clientHeight || window.innerHeight;
              
              const targetMouse = new THREE.Vector2(
                demoX * containerWidth,
                demoY * containerHeight
              );
              
              velocity.lerp(targetMouse.clone().sub(mouse), takeoverDuration * deltaTime);
              mouse.lerp(targetMouse, takeoverDuration * deltaTime);
            } else {
              velocity.multiplyScalar(0.95);
            }
            
            // Update uniforms
            material.uniforms.u_time.value += deltaTime;
            material.uniforms.u_mouse.value.copy(mouse);
            material.uniforms.u_velocity.value.copy(velocity).multiplyScalar(mouseForce);
            
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          };
          animate();
        },
        pause: () => {
          // Animation will naturally pause when not called
        },
        resize: () => {
          if (!containerRef.current) return;
          const width = containerRef.current.clientWidth || window.innerWidth;
          const height = containerRef.current.clientHeight || window.innerHeight;
          renderer.setSize(width, height);
          material.uniforms.u_resolution.value.set(width, height);
        },
        dispose: () => {
          if (container && renderer.domElement) {
            container.removeChild(renderer.domElement);
          }
          renderer.dispose();
          geometry.dispose();
          material.dispose();
        }
      };
      
      webglRef.current = webgl;
      webgl.start();

      // Mouse/Touch handlers
      const handleMove = (clientX: number, clientY: number) => {
        if (!containerRef.current || !webglRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        
        const newMouse = new THREE.Vector2(x, y);
        velocity.subVectors(newMouse, mouse);
        mouse.copy(newMouse);
        
        isInteracting = true;
        if (autoTimeout) clearTimeout(autoTimeout);
        autoTimeout = setTimeout(() => {
          isInteracting = false;
        }, takeoverDuration * 1000);
      };

      const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) handleMove(e.touches[0].clientX, e.touches[0].clientY);
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('touchmove', handleTouchMove);

      const io = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          const visible = entry.isIntersecting && entry.intersectionRatio > 0;
          isVisibleRef.current = visible;
          if (!webglRef.current) return;
          if (visible && !document.hidden) {
            webglRef.current.start();
          } else {
            webglRef.current.pause();
          }
        },
        { threshold: [0, 0.01, 0.1] }
      );
      io.observe(container);
      intersectionObserverRef.current = io;

      const ro = new ResizeObserver(() => {
        if (!webglRef.current) return;
        if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
        resizeRafRef.current = requestAnimationFrame(() => {
          webglRef.current?.resize();
        });
      });
      ro.observe(container);
      resizeObserverRef.current = ro;

    } catch (e) {
      console.error('LiquidEther init failed:', e);
    }
  };

  // Wait 2 frames for container to have real dimensions
  let raf1: number;
  let raf2: number;
  raf1 = requestAnimationFrame(() => {
    raf2 = requestAnimationFrame(startWebGL);
  });

  return () => {
    cancelled = true;
    cancelAnimationFrame(raf1);
    cancelAnimationFrame(raf2);
    if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
    if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    if (intersectionObserverRef.current) intersectionObserverRef.current.disconnect();
    if (webglRef.current) {
      webglRef.current.dispose();
      webglRef.current = null;
    }
  };
  }, [colors, mouseForce, cursorSize, resolution, dt, BFECC, isViscous, autoDemo, autoSpeed, autoIntensity, autoResumeDelay, autoRampDuration, takeoverDuration]);

  return (
    <div 
      ref={containerRef} 
      style={{ width: '100%', height: '100%', ...style }} 
    />
  );
}
