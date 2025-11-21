"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState } from "react"
import { Zap, Layers, Users, Lock, Rocket, Globe } from "lucide-react"

const experiences = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Experience blazing-fast load times and instant interactions",
    stat: "50%",
    statLabel: "Faster",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "All your tools and services working in perfect harmony",
    stat: "10+",
    statLabel: "Integrations",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    icon: Users,
    title: "Enhanced Collaboration",
    description: "Work together effortlessly with real-time updates",
    stat: "100K+",
    statLabel: "Active Users",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance standards",
    stat: "SOC 2",
    statLabel: "Certified",
    gradient: "from-red-400 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Built on cutting-edge tech that scales with you",
    stat: "∞",
    statLabel: "Scalability",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Optimized performance across all continents",
    stat: "6",
    statLabel: "Continents",
    gradient: "from-cyan-400 to-blue-500"
  },
]

function ExperienceCard({ experience, index }: { experience: typeof experiences[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = experience.icon

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} blur-3xl`}
        />

        {/* Spotlight effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at ${mouseX.get() * 100 + 50}% ${mouseY.get() * 100 + 50}%, rgba(255,255,255,0.8), transparent 50%)`,
          }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          {/* Icon */}
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${experience.gradient} mb-6 shadow-lg`}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Stat */}
          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <div className={`text-5xl font-bold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent`}>
              {experience.stat}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {experience.statLabel}
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            {experience.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {experience.description}
          </p>

          {/* Hover indicator */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
              x: isHovered ? 0 : -10,
            }}
            transition={{ duration: 0.3 }}
            className="mt-6 flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <span>Explore</span>
            <motion.span
              animate={{ x: isHovered ? [0, 5, 0] : 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ExperienceCenter() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20"
          >
            <span className="text-purple-600 dark:text-purple-400 font-medium text-sm">
              Experience Center
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Discover What's Possible
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the innovations that power the next generation of ACO.COMPANY.
            Every feature designed with you in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Stay Updated on Our Progress
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
