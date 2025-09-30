'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';

const DEFAULT_BEHIND_GRADIENT =
  'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(0,100%,90%,var(--card-opacity)) 4%,hsla(0,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(0,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(0,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#ff0000c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#ff0000ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#E62B1Eff 0%,#ff0000ff 40%,#ff0000ff 60%,#E62B1Eff 100%)';

const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#4a1a1a8c 0%,#E62B1E44 100%)';

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20
};

const clamp = (value: number, min = 0, max = 100) => Math.min(Math.max(value, min), max);

const round = (value: number, precision = 3) => parseFloat(value.toFixed(precision));

const adjust = (value: number, fromMin: number, fromMax: number, toMin: number, toMax: number) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

interface ProfileCardProps {
  avatarUrl?: string;
  iconUrl?: string;
  grainUrl?: string;
  behindGradient?: string;
  innerGradient?: string;
  showBehindGradient?: boolean;
  className?: string;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  mobileTiltSensitivity?: number;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  showUserInfo?: boolean;
  onContactClick?: () => void;
}

const ProfileCardComponent = ({
  avatarUrl = 'https://i.pravatar.cc/400',
  iconUrl,
  grainUrl,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  miniAvatarUrl,
  name = 'Team Member',
  title = 'Position',
  handle = 'handle',
  status = 'TEDxBITSGoa',
  contactText = 'Contact',
  showUserInfo = true,
  onContactClick
}: ProfileCardProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId: number | null = null;

    const updateCardTransform = (offsetX: number, offsetY: number, card: HTMLElement, wrap: HTMLElement) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (duration: number, startX: number, startY: number, card: HTMLElement, wrap: HTMLElement) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add('active');
    card.classList.add('active');
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event: PointerEvent) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
      wrap.classList.remove('active');
      card.classList.remove('active');
    },
    [animationHandlers]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove as any;
    const pointerEnterHandler = handlePointerEnter as any;
    const pointerLeaveHandler = handlePointerLeave as any;

    card.addEventListener('pointerenter', pointerEnterHandler);
    card.addEventListener('pointermove', pointerMoveHandler);
    card.addEventListener('pointerleave', pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);

    return () => {
      card.removeEventListener('pointerenter', pointerEnterHandler);
      card.removeEventListener('pointermove', pointerMoveHandler);
      card.removeEventListener('pointerleave', pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [enableTilt, enableMobileTilt, animationHandlers, handlePointerMove, handlePointerEnter, handlePointerLeave]);

  const cardStyle = useMemo(
    () => ({
      '--icon': iconUrl ? `url(${iconUrl})` : 'none',
      '--grain': grainUrl ? `url(${grainUrl})` : 'none',
      '--behind-gradient': showBehindGradient ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT) : 'none',
      '--inner-gradient': innerGradient ?? DEFAULT_INNER_GRADIENT,
      '--pointer-x': '50%',
      '--pointer-y': '50%',
      '--rotate-x': '0deg',
      '--rotate-y': '0deg',
      '--card-opacity': '0.8'
    } as React.CSSProperties),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full max-w-[400px] mx-auto perspective-[1000px] ${className}`.trim()}
      style={cardStyle}
    >
      <section
        ref={cardRef}
        className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden transition-transform duration-200 ease-out"
        style={{
          transform: 'rotateX(var(--rotate-y)) rotateY(var(--rotate-x))',
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {/* Behind Gradient */}
          <div
            className="absolute inset-0 opacity-100 transition-opacity duration-300"
            style={{
              background: 'var(--behind-gradient)',
              backgroundPosition: 'var(--background-x) var(--background-y)',
              backgroundSize: '200% 200%'
            }}
          />

          {/* Shine Effect */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.3) 0%, transparent 60%)',
              mixBlendMode: 'overlay'
            }}
          />

          {/* Glare Effect */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,0.15) 0%, transparent 50%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Avatar Content */}
            <div className="flex-1 p-4">
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={avatarUrl}
                alt={`${name} avatar`}
                loading="lazy"
              />
              {showUserInfo && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-500">
                      <img src={miniAvatarUrl || avatarUrl} alt={`${name} mini`} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-white">
                      <div className="text-xs opacity-80">@{handle}</div>
                      <div className="text-xs opacity-70">{status}</div>
                    </div>
                  </div>
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                    onClick={handleContactClick}
                    type="button"
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-1">{name}</h3>
              <p className="text-red-400 font-semibold">{title}</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .active section {
          transform: rotateX(var(--rotate-y)) rotateY(var(--rotate-x)) scale(1.02);
        }
        .active section > div > div:nth-child(2),
        .active section > div > div:nth-child(3) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
