"use client"

import { motion } from "framer-motion"
// import { Network } from 'lucide-react'
import ButtonLink from "@/components/ui/button-link"

export default function StartupNexus() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

  return (
    <div className="py-16 bg-white mt-10">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl font-bold text-center text-black mb-4">
                Startup <span className="text-gray-600">Nexus</span>
              </h2>
              <p className="text-gray-700 text-lg text-center mb-6">
                Africa FinTech Fest & Awards 2025
                <br />
                10 – 11 July 2025 | Johannesburg, South Africa
              </p>

              <div className="flex justify-center mb-6">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ButtonLink 
                    href="/startup-nexus" 
                    variant="primary"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Learn More
                  </ButtonLink>
                </motion.div>
              </div>

              <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-black">Get More Info</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className="w-full p-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Business Email *"
                      className="w-full p-2 border border-gray-300 rounded-md text-black"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-black">
                A Launchpad for Start-up and Scale-Up Growth
              </h3>
              <p className="text-gray-700 mb-6">
                This dedicated hub is built to accelerate the success of start-ups and scale-ups, featuring a
                dynamic stage, exclusive networking space, and high-impact deal booths.
              </p>
              <p className="text-gray-700 mb-6">
                Startup Nexus unites the entire start-up and scale-up ecosystem under one roof, offering an
                unmatched platform for growth and collaboration. Whether you&apos;re seeking funding, expansion
                opportunities, or strategic partnerships, this is the place to make it happen.
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-semibold mb-4 text-black">WHO YOU&apos;LL CONNECT WITH</h3>
                <p className="text-gray-700 mb-4">
                  Meet venture capitalists, corporate investors, accelerators, banking partnership leaders, startup
                  founders, and entrepreneurs.
                </p>
                <p className="text-gray-700 mb-6">
                  This isn&apos;t just an event—it&apos;s a springboard for your ambitions. The stage is set, key
                  players are coming together, and the possibilities are endless. Will you be there to seize the
                  moment?
                </p>

                <div>
                  <h4 className="font-medium mb-2 text-black">Exclusive VC & Investor Passes</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    Are you a venture capitalist or investor? We&apos;re offering a limited number of complimentary
                    passes for our VC and investor community to experience Startup Nexus.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <ButtonLink 
                      href="/complementary-pass" 
                      variant="outline" 
                      size="sm"
                      className="border-black text-black hover:bg-gray-100"
                    >
                      Apply For Your Complementary Pass
                    </ButtonLink>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
