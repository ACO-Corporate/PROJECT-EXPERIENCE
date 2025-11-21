"use client"

import { motion } from "framer-motion"

interface ACOLogoProps {
  size?: number
  className?: string
  showTrail?: boolean
}

export default function ACOLogo({ size = 80, className = "", showTrail = false }: ACOLogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Energy trail particles */}
      {showTrail && (
        <>
          <motion.div
            className="absolute inset-0 blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: "radial-gradient(circle, rgba(0,180,255,0.4) 0%, rgba(0,255,179,0.4) 100%)"
            }}
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full"
              style={{
                background: `linear-gradient(135deg, #00B4FF, #00FFB3)`,
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 4) * 40],
                y: [0, Math.sin(i * Math.PI / 4) * 40],
                opacity: [0.8, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </>
      )}

      {/* Main logo triangle */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <defs>
          {/* Animated gradient */}
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4FF">
              <animate
                attributeName="stop-color"
                values="#00B4FF; #00FFB3; #00B4FF"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#00FFB3">
              <animate
                attributeName="stop-color"
                values="#00FFB3; #00B4FF; #00FFB3"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
          
          {/* Metallic filter */}
          <filter id="metallic">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glow layer */}
        <motion.path
          d="M 50 10 Q 52 10 90 75 Q 90 78 50 78 Q 10 78 10 75 Q 48 10 50 10 Z"
          fill="url(#logoGradient)"
          opacity="0.6"
          filter="blur(8px)"
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Main triangle with curved base */}
        <motion.path
          d="M 50 10 Q 52 10 90 75 Q 90 78 50 78 Q 10 78 10 75 Q 48 10 50 10 Z"
          fill="#1a1a1a"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          filter="url(#metallic)"
          animate={{
            rotateZ: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Inner glow accent */}
        <motion.path
          d="M 50 20 Q 51 20 80 70 Q 80 72 50 72 Q 20 72 20 70 Q 49 20 50 20 Z"
          fill="url(#logoGradient)"
          opacity="0.3"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  )
}
