"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const newsItems = [
  "Domain DNS & Hosting transferred after revamp with no downtime.",
  "Corporate clients continue receiving before time project delivery.",
  "ACO Accounts integration rolling out across all platforms.",
  "Zero service interruptions during complete infrastructure overhaul.",
  "Enhanced security protocols now active across all services.",
  "New frontend delivering 50% faster load times for all users."
]

export default function NewsTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-teal-600/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/80 text-xs font-medium tracking-wide uppercase">Live Update</span>
        </div>
        
        <div className="flex-1 overflow-hidden max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-sm font-medium text-center"
              style={{ fontFamily: 'Lexend, sans-serif' }}
            >
              {newsItems[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex gap-1">
          {newsItems.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
