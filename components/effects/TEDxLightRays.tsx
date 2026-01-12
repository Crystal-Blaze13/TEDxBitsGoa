'use client';

import { useEffect, useRef } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m 
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : [1, 1, 1];
};

const TEDxLightRays = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const uniformsRef = useRef<any>(null);
  const meshRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let cleanup: (() => void) | void;
    let isMounted = true;

    const init = async () => {
      const renderer = new Renderer({
        dpr: Math.min(window.devicePixelRatio, 2),
        alpha: true,
        premultipliedAlpha: false
      });
      rendererRef.current = renderer;
      
      const gl = renderer.gl;
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      gl.canvas.style.position = 'absolute';
      gl.canvas.style.top = '0';
      gl.canvas.style.left = '0';
      gl.canvas.style.opacity = '0.6';
      gl.canvas.style.pointerEvents = 'none';

      containerRef.current!.appendChild(gl.canvas);

      // Vertex shader
      const vert = `
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;

      // Fragment shader
      const frag = `
        precision highp float;
        
        uniform float iTime;
        uniform vec2 iResolution;
        uniform vec3 raysColor;
        uniform float raysSpeed;
        uniform float rayLength;
        uniform float lightSpread;
        uniform float fadeDistance;
        uniform float saturation;
        
        varying vec2 vUv;
        
        float noise(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }
        
        float rayStrength(vec2 raySource, vec2 rayDir, vec2 coord, float seedA, float seedB, float speed) {
          vec2 sourceToCoord = coord - raySource;
          float dist = length(sourceToCoord);
          vec2 dir = normalize(sourceToCoord);
          
          float angle = dot(rayDir, dir);
          float spread = pow(angle, 1.0 / lightSpread);
          
          float falloff = smoothstep(0.0, 1.0, 1.0 - dist / (iResolution.x * rayLength));
          float fade = smoothstep(0.0, 1.0, (iResolution.x * fadeDistance - dist) / (iResolution.x * fadeDistance));
          
          float pulse = 0.8 + 0.2 * sin(iTime * speed * 2.0);
          float strength = (0.5 + 0.5 * sin(angle * seedA + iTime * speed)) * 
                          (0.5 + 0.5 * cos(-angle * seedB + iTime * speed * 0.7));
                          
          return strength * spread * falloff * fade * pulse;
        }
        
        void main() {
          vec2 coord = vUv * iResolution.xy;
          vec2 center = iResolution.xy * 0.5;
          
          // TEDx red color
          vec3 color = vec3(0.9, 0.1, 0.1);
          
          // Add rays from center
          float rays = 0.0;
          rays += rayStrength(center, normalize(vec2(1, 0)), coord, 36.2, 21.1, 0.8);
          rays += rayStrength(center, normalize(vec2(-1, 0)), coord, 22.4, 18.0, 0.6);
          rays += rayStrength(center, normalize(vec2(0, 1)), coord, 15.3, 27.9, 0.7);
          rays += rayStrength(center, normalize(vec2(0, -1)), coord, 31.7, 13.2, 0.9);
          
          // Add some noise for texture
          float n = noise(coord * 0.01 + iTime * 0.1) * 0.2;
          rays = mix(rays, rays * (0.8 + 0.4 * n), 0.3);
          
          // Apply color and brightness
          vec3 finalColor = color * rays * 1.5;
          
          // Vignette
          vec2 uv = vUv * 2.0 - 1.0;
          float vignette = 1.0 - dot(uv, uv) * 0.2;
          finalColor *= vignette;
          
          gl_FragColor = vec4(finalColor, rays * 0.6);
        }
      `;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        raysColor: { value: hexToRgb('#e62b1e') }, // TEDx Red
        raysSpeed: { value: 0.5 },
        rayLength: { value: 1.5 },
        lightSpread: { value: 0.3 },
        fadeDistance: { value: 0.7 },
        saturation: { value: 1.0 }
      };
      uniformsRef.current = uniforms;

      const geometry = new Triangle(gl);
      const program = new Program(gl, {
        vertex: vert,
        fragment: frag,
        uniforms,
        transparent: true,
        depthTest: false
      });

      const mesh = new Mesh(gl, { geometry, program });
      meshRef.current = mesh;

      const resize = () => {
        if (!containerRef.current || !renderer) return;
        
        const { clientWidth: w, clientHeight: h } = containerRef.current;
        renderer.setSize(w, h);
        uniforms.iResolution.value = [w, h];
      };

      const animate = (time: number) => {
        if (!renderer || !uniformsRef.current) return;
        
        uniformsRef.current.iTime.value = time * 0.001;
        renderer.render({ scene: mesh });
        animationIdRef.current = requestAnimationFrame(animate);
      };
      
      // Return cleanup function
      return () => {
        window.removeEventListener('resize', resize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
          animationIdRef.current = null;
        }
        if (renderer) {
          const canvas = renderer.gl.canvas;
          if (canvas && canvas.parentNode) {
            canvas.parentNode.removeChild(canvas);
          }
        }
      };

      window.addEventListener('resize', resize);
      resize();
      animationIdRef.current = requestAnimationFrame(animate);
      
      // The cleanup function is now returned from the animate function
    };

    init().then((cleanupFn) => {
      if (isMounted) {
        cleanup = cleanupFn;
      } else if (cleanupFn) {
        // If component unmounted before initialization completed, clean up immediately
        cleanupFn();
      }
    });

    return () => {
      isMounted = false;
      if (cleanup) cleanup();
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default TEDxLightRays;
