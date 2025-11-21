"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Activity } from "lucide-react"

const services = [
  { name: "Web Platform", status: "operational", uptime: "99.99%" },
  { name: "Mobile Apps", status: "operational", uptime: "99.98%" },
  { name: "Corporate Services", status: "operational", uptime: "100%" },
  { name: "User Accounts", status: "operational", uptime: "99.99%" },
  { name: "API Services", status: "operational", uptime: "99.97%" },
  { name: "Data Processing", status: "operational", uptime: "99.99%" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
}

export default function StatusDashboard() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/10 rounded-full">
            <Activity className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-600 dark:text-green-400 font-medium text-sm">
              Live Status
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Zero Interruption
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            While we rebuild everything from the ground up, all existing services
            remain fully operational with industry-leading uptime.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-green-500/50 dark:hover:border-green-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </h3>
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Operational
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 dark:text-gray-500">Uptime</span>
                      <span className="font-mono font-semibold text-gray-900 dark:text-white">
                        {service.uptime}
                      </span>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: service.uptime }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-gray-100 dark:bg-gray-900 rounded-2xl px-8 py-6 border border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                0
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Downtime Events
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Business Continuity
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-700" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                24/7
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Support Available
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
