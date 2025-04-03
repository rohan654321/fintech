"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { useState } from "react"
// import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

export default function FintechPioneerAwards() {
  // const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const categories = [
    {
      title: "Innovation Excellence",
      description: "Recognizing groundbreaking solutions that are reshaping financial services",
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
    },
    {
      title: "Emerging Fintech Leader",
      description: "Celebrating rising stars making significant impact in the industry",
      icon: <Star className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Digital Transformation",
      description: "Honoring organizations that have successfully embraced digital innovation",
      icon: <Trophy className="h-8 w-8 text-purple-500" />,
    },
  ]

  const handleNominateClick = () => {
    // Navigate directly to the nomination page instead of using a dialog
    router.push("/fintech/nominate")
  }

  return (
    <div className="min-h-screen bg-white mt-10">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] bg-[url('/fintech-hero.jpg')] bg-cover bg-center bg-fixed flex items-center justify-center">
        <div className="absolute inset-0 bg-white backdrop-blur-sm" />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md mb-6">
            <Award className="h-10 w-10 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Fintech Pioneer Awards
          </h1>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto">
            Celebrating the visionaries transforming the future of finance
          </p>
          {/* <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10"
          >
            <button
              onClick={handleNominateClick}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-medium py-3 px-8 rounded-full shadow-lg transition-all duration-300"
            >
              <span className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Submit Your Nomination
              </span>
            </button>
          </motion.div> */}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 -mt-20 relative z-20">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="max-w-6xl mx-auto"
        >
          {/* About Section */}
          <motion.div 
            variants={item}
            className="bg-white rounded-xl shadow-xl p-8 mb-16 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              About the Awards
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  The Fintech Pioneer Awards recognize exceptional innovation and leadership in financial technology. 
                  We honor the companies and individuals who are pushing boundaries and creating the future of finance.
                </p>
                <p className="text-lg text-gray-700">
                  Our rigorous judging process evaluates nominees based on innovation, impact, scalability, and 
                  contribution to the fintech ecosystem. Winners receive industry recognition, media coverage, 
                  and opportunities to connect with investors and partners.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-700">Years Running</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                    <div className="text-gray-700">Nominations</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
                    <div className="text-gray-700">Countries</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-700">Judges</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories Section */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Award Categories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-100 to-white mb-6 mx-auto">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 flex-grow">{category.description}</p>
                      <div className="mt-6 text-sm text-blue-600 font-medium">
                        Learn more about criteria
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Participate Section */}
          <motion.div variants={item} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-xl mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Why Participate?</h2>
                <ul className="space-y-5">
                  {[
                    "Industry-wide recognition for your innovative solutions",
                    "Showcase achievements to potential investors and partners",
                    "Network with industry leaders and decision-makers",
                    "Elevate brand visibility in the competitive fintech landscape",
                    "Media coverage and marketing opportunities"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="p-1 bg-white/20 rounded-full">
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <p className="text-white/90 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-white">Key Dates</h2>
                <div className="space-y-4">
                  {[
                    { title: "Nominations Open", date: "March 15, 2025" },
                    { title: "Submissions Deadline", date: "May 30, 2025" },
                    { title: "Finalists Announced", date: "June 15, 2025" },
                    { title: "Awards Ceremony", date: "July 11, 2025" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="mr-4 p-2 bg-white rounded-full">
                        <span className="font-bold text-blue-600">{i + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-white/80">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={item}
            className="text-center bg-white rounded-xl shadow-lg p-12 border border-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Showcase Your Innovation?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Submit your nomination today and take the first step towards gaining recognition as a fintech pioneer.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={handleNominateClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-4 px-10 rounded-full shadow-xl transition-all duration-300 text-lg"
              >
                <span className="flex items-center justify-center">
                  <Award className="mr-3 h-5 w-5" />
                  Begin Nomination Process
                </span>
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}