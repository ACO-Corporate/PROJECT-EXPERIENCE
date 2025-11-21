"use client"

import HeroSection from "@/components/HeroSection"
import StatusDashboard from "@/components/StatusDashboard"
import WhatsNewSection from "@/components/WhatsNewSection"
import ExperienceCenter from "@/components/ExperienceCenter"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <StatusDashboard />
      <WhatsNewSection />
      <ExperienceCenter />
      
      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">ACO.COMPANY</h3>
            <p className="text-gray-400">Building the future, one innovation at a time.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-gray-500">
            © 2024 ACO.COMPANY. All systems operational. Zero downtime guaranteed.
          </div>
        </div>
      </footer>
    </main>
  )
}