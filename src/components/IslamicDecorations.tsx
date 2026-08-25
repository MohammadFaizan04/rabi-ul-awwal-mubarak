import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
  glow?: boolean;
}

/**
 * 8-Pointed Star (Rub el Hizb) - Traditional Islamic Geometric Motif
 */
export const RubElHizb: React.FC<SvgProps> = ({ className = '', size = 32, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="none"
      rx="2"
    />
    <rect
      x="20"
      y="20"
      width="60"
      height="60"
      stroke="currentColor"
      strokeWidth="3.5"
      fill="none"
      transform="rotate(45 50 50)"
      rx="2"
    />
    <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="50" r="3" fill="currentColor" />
  </svg>
);

/**
 * Crescent Moon and Morning Star (Al-Hilal & Najm)
 */
export const CrescentAndStar: React.FC<SvgProps> = ({ className = '', size = 48, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="goldGradientCrescent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff2cc" />
        <stop offset="45%" stopColor="#e5c158" />
        <stop offset="100%" stopColor="#a37624" />
      </linearGradient>
      <filter id="crescentGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Crescent Moon path */}
    <path
      d="M52 14C31.013 14 14 31.013 14 52C14 72.987 31.013 90 52 90C63.24 90 73.28 85.12 80.2 77.4C63.8 77.8 47.4 64.6 47.4 47.4C47.4 33.4 56.4 21.6 69.8 17.6C64.4 15.3 58.4 14 52 14Z"
      fill="url(#goldGradientCrescent)"
      filter="url(#crescentGlow)"
    />

    {/* Radiant 8-Point Star */}
    <g transform="translate(68, 42)">
      <path
        d="M0 -12L3 -3L12 0L3 3L0 12L-3 3L-12 0L-3 -3Z"
        fill="url(#goldGradientCrescent)"
      />
      <circle cx="0" cy="0" r="1.5" fill="#fff" />
    </g>
  </svg>
);

/**
 * Traditional Islamic Hanging Lantern (Fanous)
 */
export const IslamicLantern: React.FC<SvgProps & { hangingLength?: number }> = ({
  className = '',
  size = 40,
  ...props
}) => (
  <svg
    width={size}
    height={size * 1.8}
    viewBox="0 0 60 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <defs>
      <linearGradient id="lanternMetal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f7e6b5" />
        <stop offset="50%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8a691e" />
      </linearGradient>
      <linearGradient id="lanternGlow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fff8db" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#ffb703" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="wickGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#ffe680" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>

    {/* Hanging chain */}
    <line x1="30" y1="0" x2="30" y2="25" stroke="url(#lanternMetal)" strokeWidth="1.5" strokeDasharray="3 2" />
    <circle cx="30" cy="27" r="4" stroke="url(#lanternMetal)" strokeWidth="1.5" fill="none" />

    {/* Top Cap */}
    <path d="M18 42L30 31L42 42H18Z" fill="url(#lanternMetal)" />
    <rect x="22" y="42" width="16" height="3" fill="url(#lanternMetal)" rx="1" />

    {/* Glass Chamber */}
    <path
      d="M16 45L22 75H38L44 45H16Z"
      fill="url(#lanternGlow)"
      stroke="url(#lanternMetal)"
      strokeWidth="1.5"
    />
    
    {/* Inner Flame */}
    <ellipse cx="30" cy="59" rx="8" ry="12" fill="url(#wickGlow)" />
    <circle cx="30" cy="59" r="2.5" fill="#ffffff" />

    {/* Base */}
    <path d="M20 75L18 85H42L40 75H20Z" fill="url(#lanternMetal)" />
    <circle cx="30" cy="91" r="3" fill="url(#lanternMetal)" />
    <line x1="30" y1="94" x2="30" y2="104" stroke="url(#lanternMetal)" strokeWidth="1.5" />
    <circle cx="30" cy="105" r="1.5" fill="url(#lanternMetal)" />
  </svg>
);

/**
 * Islamic Arch / Mihrab Frame Vector
 */
export const IslamicMihrabArch: React.FC<SvgProps> = ({ className = '', size = 60, ...props }) => (
  <svg
    width={size}
    height={size * 1.3}
    viewBox="0 0 100 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M10 130V65C10 35 30 15 50 5C70 15 90 35 90 65V130"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 130V70C20 45 35 28 50 18C65 28 80 45 80 70V130"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="2 3"
      fill="none"
    />
    <circle cx="50" cy="5" r="2" fill="currentColor" />
  </svg>
);

/**
 * Geometric Arabesque Tile Background Pattern (Continuous Tileable Motif)
 */
export const ArabesquePatternOverlay: React.FC<{ opacity?: number; className?: string }> = ({
  opacity = 0.04,
  className = '',
}) => (
  <div
    className={`absolute inset-0 pointer-events-none ${className}`}
    style={{ opacity }}
    aria-hidden="true"
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamicLattice" width="80" height="80" patternUnits="userSpaceOnUse">
          {/* Octagram Star */}
          <path
            d="M40 8L48 24L64 16L56 32L72 40L56 48L64 64L48 56L40 72L32 56L16 64L24 48L8 40L24 32L16 16L32 24Z"
            fill="none"
            stroke="#d4af37"
            strokeWidth="0.8"
          />
          {/* Connectors */}
          <line x1="0" y1="0" x2="16" y2="16" stroke="#d4af37" strokeWidth="0.6" />
          <line x1="80" y1="0" x2="64" y2="16" stroke="#d4af37" strokeWidth="0.6" />
          <line x1="0" y1="80" x2="16" y2="64" stroke="#d4af37" strokeWidth="0.6" />
          <line x1="80" y1="80" x2="64" y2="64" stroke="#d4af37" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamicLattice)" />
    </svg>
  </div>
);
