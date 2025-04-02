"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Zap, ArrowRight } from "lucide-react"
import ButtonLink from "@/components/ui/button-link"
import { Card, CardContent } from "@/components/ui/card"

export default function FintechPioneerAwards() {
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
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Emerging Fintech Leader",
      description: "Celebrating rising stars making significant impact in the industry",
      icon: <Star className="h-8 w-8" />,
    },
    {
      title: "Digital Transformation",
      description: "Honoring organizations that have successfully embraced digital innovation",
      icon: <Trophy className="h-8 w-8" />,
    },
  ]

  return (
    <div className="py-16 bg-white mt-10">
      <div className="container mx-auto px-4">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <div className="inline-block p-2 bg-gray-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-black" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Fintech Pioneer <span className="text-black">Awards</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Step into the spotlight at the Fintech Pioneer Awards—celebrating the bold visionaries and ground breaking
              innovations transforming the future of finance. Join us to honour the trailblazers redefining the industry
              and shaping tomorrow&apos;s financial landscape. Be inspired, be recognized, and be part of the revolution!
            </p>
          </motion.div>

          <motion.div variants={item} className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-black">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-gray-100 p-8 rounded-lg shadow-sm mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">Why Participate?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="p-1 bg-gray-200 rounded-full">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    <p className="text-gray-700">Gain industry-wide recognition for your innovative solutions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="p-1 bg-gray-200 rounded-full">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    <p className="text-gray-700">Showcase your achievements to potential investors and partners</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="p-1 bg-gray-200 rounded-full">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    <p className="text-gray-700">Network with industry leaders and decision-makers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="p-1 bg-gray-200 rounded-full">
                        <ArrowRight className="h-4 w-4 text-black" />
                      </div>
                    </div>
                    <p className="text-gray-700">Elevate your brand visibility in the competitive fintech landscape</p>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-black">Key Dates</h2>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="mr-4 p-2 bg-gray-200 rounded-full">
                      <span className="font-bold text-black">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Nominations Open</p>
                      <p className="text-sm text-gray-600">March 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="mr-4 p-2 bg-gray-200 rounded-full">
                      <span className="font-bold text-black">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Submissions Deadline</p>
                      <p className="text-sm text-gray-600">May 30, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <div className="mr-4 p-2 bg-gray-200 rounded-full">
                      <span className="font-bold text-black">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Awards Ceremony</p>
                      <p className="text-sm text-gray-600">July 11, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-black">Ready to Showcase Your Innovation?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Submit your nomination today and take the first step towards gaining recognition as a fintech pioneer. Our
              expert panel of judges is eager to discover the next wave of industry-defining innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ButtonLink href="/awards/nominate" variant="primary" className="bg-black text-white hover:bg-gray-800">
                  <Award className="mr-2 h-5 w-5" />
                  Submit Your Nomination
                </ButtonLink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ButtonLink
                  href="/awards/categories"
                  variant="outline"
                  className="border-black text-black hover:bg-gray-100"
                >
                  View All Categories
                </ButtonLink>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

