"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import ACOLogo from "./ACOLogo"
import { Laptop, Smartphone, Server, Heart, Cog, Zap, Car, Globe } from "lucide-react"

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Divide scroll into 12 stages
  const stage1Progress = useTransform(scrollYProgress, [0, 0.08], [0, 1])
  const stage2Progress = useTransform(scrollYProgress, [0.08, 0.16], [0, 1])
  const stage3Progress = useTransform(scrollYProgress, [0.16, 0.24], [0, 1])
  const stage4Progress = useTransform(scrollYProgress, [0.24, 0.32], [0, 1])
  const stage5Progress = useTransform(scrollYProgress, [0.32, 0.40], [0, 1])
  const stage6Progress = useTransform(scrollYProgress, [0.40, 0.48], [0, 1])
  const stage7Progress = useTransform(scrollYProgress, [0.48, 0.56], [0, 1])
  const stage8Progress = useTransform(scrollYProgress, [0.56, 0.64], [0, 1])
  const stage9Progress = useTransform(scrollYProgress, [0.64, 0.72], [0, 1])
  const stage10Progress = useTransform(scrollYProgress, [0.72, 0.80], [0, 1])
  const stage11Progress = useTransform(scrollYProgress, [0.80, 0.90], [0, 1])
  const stage12Progress = useTransform(scrollYProgress, [0.90, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative" style={{ height: '1200vh' }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-gray-950">
        
        {/* Stage 1: Descent from Space */}
        <Stage1 progress={stage1Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 2: Touching Earth */}
        <Stage2 progress={stage2Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 3: Laptop */}
        <Stage3 progress={stage3Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 4: Smartphone */}
        <Stage4 progress={stage4Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 5: Server Rack */}
        <Stage5 progress={stage5Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 6: Healthcare Monitor */}
        <Stage6 progress={stage6Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 7: Industrial Gear */}
        <Stage7 progress={stage7Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 8: Energy Grid */}
        <Stage8 progress={stage8Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 9: Transportation */}
        <Stage9 progress={stage9Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 10: City Network */}
        <Stage10 progress={stage10Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 11: Finale - Formation */}
        <Stage11 progress={stage11Progress} scrollYProgress={scrollYProgress} />
        
        {/* Stage 12: Closing Message */}
        <Stage12 progress={stage12Progress} />
      </div>
    </div>
  )
}

// Stage 1: Descent from Space
function Stage1({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0, 0.08, 0.09], [1, 1, 0])
  const logoY = useTransform(progress, [0, 1], [-200, 0])
  const starsOpacity = useTransform(progress, [0, 1], [1, 0.3])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      {/* Starfield */}
      <motion.div className="absolute inset-0" style={{ opacity: starsOpacity }}>
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Aurora trails */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,180,255,0.2) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <motion.div style={{ y: logoY }}>
        <ACOLogo size={120} showTrail />
      </motion.div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Origin & Arrival
      </motion.h2>
    </motion.div>
  )
}

// Stage 2: Touching Earth
function Stage2({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.08, 0.16, 0.17], [0, 1, 0])
  const bgGradient = useTransform(progress, [0, 1], ["#000000", "#1a2332"])
  const logoScale = useTransform(progress, [0, 1], [1, 1.3])
  const glow = useTransform(progress, [0, 1], [0.5, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity, backgroundColor: bgGradient }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(0,180,255,0.3) 0%, transparent 60%)",
          opacity: glow,
        }}
      />

      <motion.div style={{ scale: logoScale }}>
        <ACOLogo size={120} showTrail />
      </motion.div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Entering the Human World
      </motion.h2>
    </motion.div>
  )
}

// Stage 3: Laptop
function Stage3({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.16, 0.24, 0.25], [0, 1, 0])
  const logoX = useTransform(progress, [0, 1], [-100, 100])
  const laptopGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])
  const laptopScale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div
          style={{ scale: laptopScale }}
          className="relative"
        >
          <Laptop size={200} className="text-gray-700" strokeWidth={1} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: laptopGlow }}
          >
            <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded opacity-50 blur-xl" />
          </motion.div>
        </motion.div>

        <motion.div style={{ x: logoX }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={80} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Upgrading Creativity & Efficiency
      </motion.h2>
    </motion.div>
  )
}

// Stage 4: Smartphone
function Stage4({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.24, 0.32, 0.33], [0, 1, 0])
  const logoX = useTransform(progress, [0, 1], [-100, 100])
  const phoneGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div className="relative">
          <Smartphone size={160} className="text-gray-700" strokeWidth={1} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: phoneGlow }}
          >
            <div className="w-20 h-32 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-lg opacity-50 blur-xl" />
          </motion.div>
        </motion.div>

        <motion.div style={{ x: logoX }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={60} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Connection & Communication
      </motion.h2>
    </motion.div>
  )
}

// Stage 5: Server Rack
function Stage5({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.32, 0.40, 0.41], [0, 1, 0])
  const logoY = useTransform(progress, [0, 1], [-100, 100])
  const serverGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div className="relative">
          <Server size={180} className="text-gray-600" strokeWidth={1} />
          <motion.div
            className="absolute inset-0"
            style={{ opacity: serverGlow }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-8 bg-cyan-500 opacity-30 blur-lg"
                style={{ top: `${20 + i * 33}%` }}
                animate={{
                  opacity: [0.1, 0.5, 0.1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div style={{ y: logoY }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={70} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Data & Reliability
      </motion.h2>
    </motion.div>
  )
}

// Stage 6: Healthcare Monitor
function Stage6({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.40, 0.48, 0.49], [0, 1, 0])
  const logoX = useTransform(progress, [0, 1], [-100, 100])
  const heartGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div className="relative">
          <div className="w-80 h-48 border-4 border-gray-700 rounded-lg relative overflow-hidden">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: heartGlow }}
            >
              <Heart size={100} className="text-cyan-400" fill="rgba(0,180,255,0.2)" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-2xl" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div style={{ x: logoX }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={70} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Precision & Care
      </motion.h2>
    </motion.div>
  )
}

// Stage 7: Industrial Gear
function Stage7({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.48, 0.56, 0.57], [0, 1, 0])
  const logoRotate = useTransform(progress, [0, 1], [0, 180])
  const gearRotate = useTransform(progress, [0, 1], [0, 360])
  const gearGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div style={{ rotate: gearRotate }} className="relative">
          <Cog size={200} className="text-gray-600" strokeWidth={1} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: gearGlow }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-40 blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div style={{ rotate: logoRotate }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={70} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Innovation in Industry
      </motion.h2>
    </motion.div>
  )
}

// Stage 8: Energy Grid
function Stage8({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.56, 0.64, 0.65], [0, 1, 0])
  const logoScale = useTransform(progress, [0, 1], [0.8, 1.2])
  const energyGlow = useTransform(progress, [0, 1], [0, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ 
        opacity,
        background: useTransform(progress, [0, 1], ["#0a1628", "#1a3a52"])
      }}
    >
      <div className="relative">
        <motion.div className="relative">
          <Zap size={200} className="text-gray-600" strokeWidth={1} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: energyGlow }}
          >
            <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 via-cyan-400 to-green-400 rounded-full opacity-50 blur-3xl" />
          </motion.div>
        </motion.div>

        <motion.div style={{ scale: logoScale }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={70} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Sustainability & Power
      </motion.h2>
    </motion.div>
  )
}

// Stage 9: Transportation
function Stage9({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.64, 0.72, 0.73], [0, 1, 0])
  const logoX = useTransform(progress, [0, 1], [-150, 150])
  const carGlow = useTransform(progress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative">
        <motion.div className="relative">
          <Car size={200} className="text-gray-600" strokeWidth={1} />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: carGlow }}
          >
            <div className="w-48 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 blur-2xl" />
          </motion.div>
        </motion.div>

        <motion.div style={{ x: logoX }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={60} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Mobility & Exploration
      </motion.h2>
    </motion.div>
  )
}

// Stage 10: City Network
function Stage10({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.72, 0.80, 0.81], [0, 1, 0])
  const networkGlow = useTransform(progress, [0, 1], [0, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div className="relative">
          <Globe size={220} className="text-gray-600" strokeWidth={1} />
          
          {/* Network connections */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-cyan-400"
              style={{
                x: Math.cos(i * Math.PI / 4) * 120,
                y: Math.sin(i * Math.PI / 4) * 120,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: networkGlow }}
          >
            <div className="w-64 h-64 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-30 blur-3xl" />
          </motion.div>
        </motion.div>

        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ACOLogo size={80} showTrail />
        </motion.div>
      </div>

      <motion.h2
        className="absolute bottom-32 text-white text-2xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Global Connectivity
      </motion.h2>
    </motion.div>
  )
}

// Stage 11: Finale - Formation
function Stage11({ progress, scrollYProgress }: any) {
  const opacity = useTransform(scrollYProgress, [0.80, 0.90, 0.91], [0, 1, 0])
  
  const items = [
    { Icon: Laptop, angle: 0 },
    { Icon: Smartphone, angle: 45 },
    { Icon: Server, angle: 90 },
    { Icon: Heart, angle: 135 },
    { Icon: Cog, angle: 180 },
    { Icon: Zap, angle: 225 },
    { Icon: Car, angle: 270 },
    { Icon: Globe, angle: 315 },
  ]

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
    >
      {/* Orbiting objects */}
      {items.map(({ Icon, angle }, i) => {
        const itemProgress = useTransform(progress, [0, 0.5, 1], [0, 0.5, 1])
        const radius = 250
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              x: useTransform(itemProgress, [0, 1], [0, x]),
              y: useTransform(itemProgress, [0, 1], [0, y]),
              opacity: itemProgress,
            }}
          >
            <Icon size={50} className="text-cyan-400" strokeWidth={1.5} />
          </motion.div>
        )
      })}

      {/* Center logo with burst */}
      <motion.div
        className="relative"
        style={{
          scale: useTransform(progress, [0.7, 1], [1, 1.5]),
        }}
      >
        <ACOLogo size={100} showTrail />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: useTransform(progress, [0.7, 1], [0, 1]),
          }}
        >
          <div className="w-64 h-64 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-full opacity-60 blur-3xl" />
        </motion.div>
      </motion.div>

      <motion.h2
        className="absolute bottom-32 text-white text-3xl font-bold tracking-wide"
        style={{ 
          fontFamily: 'Krona One, sans-serif',
          opacity: useTransform(progress, [0.5, 1], [0, 1])
        }}
      >
        Unity & Transformation
      </motion.h2>
    </motion.div>
  )
}

// Stage 12: Closing Message
function Stage12({ progress }: any) {
  const opacity = useTransform(progress, [0, 0.2, 1], [0, 1, 1])
  const textOpacity = useTransform(progress, [0, 0.5, 1], [0, 0, 1])

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-white"
      style={{ opacity }}
    >
      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center"
        style={{ opacity: textOpacity }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <ACOLogo size={120} className="mx-auto" />
        </motion.div>

        <motion.h2
          className="text-5xl font-bold text-gray-900 mb-8"
          style={{ fontFamily: 'Krona One, sans-serif' }}
        >
          ACO is evolving for brighter days ahead
        </motion.h2>

        <motion.p
          className="text-2xl text-gray-700 leading-relaxed mb-6"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          All services remain fully operational.
        </motion.p>

        <motion.p
          className="text-xl text-gray-600"
          style={{ fontFamily: 'Lexend, sans-serif' }}
        >
          Clients, partners, and users continue as normal.
        </motion.p>

        <motion.div
          className="mt-12 flex items-center justify-center gap-2"
          animate={{
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-600 font-medium" style={{ fontFamily: 'Lexend, sans-serif' }}>
            Zero Downtime • Always On
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
