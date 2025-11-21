"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Code2, Palette, Shield } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Next-Gen Frontend",
    description: "Built with cutting-edge technologies for lightning-fast performance and seamless interactions.",
    color: "from-blue-500 to-cyan-500",
    highlights: ["React 18+", "Advanced animations", "Optimized rendering"]
  },
  {
    icon: Shield,
    title: "Robust Backend",
    description: "Scalable architecture designed to handle millions of requests with bulletproof security.",
    color: "from-green-500 to-emerald-500",
    highlights: ["Cloud-native", "Auto-scaling", "99.99% uptime"]
  },
  {
    icon: Palette,
    title: "Fresh Brand Identity",
    description: "A bold new visual language that reflects our commitment to innovation and excellence.",
    color: "from-purple-500 to-pink-500",
    highlights: ["Modern design", "Unified experience", "Accessible"]
  },
  {
    icon: Sparkles,
    title: "ACO Accounts Integration",
    description: "Unified authentication across all platforms with enhanced security and seamless SSO.",
    color: "from-orange-500 to-red-500",
    highlights: ["Single sign-on", "2FA built-in", "Cross-platform"]
  },
]

export default function WhatsNewSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={ref} className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 font-medium text-sm">What's New</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            The Future. Today.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every aspect of ACO.COMPANY has been reimagined to deliver
            unparalleled performance, security, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1.5 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Animated corner accent */}
                    <motion.div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
