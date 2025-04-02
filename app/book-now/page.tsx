"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Sparkles, Calendar, CheckCircle2 } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookNowPage() {
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

  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-black/5 rounded-full blur-3xl"
          animate={{
            x: [100, 150, 100],
            y: [-100, -50, -100],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 20,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/5 rounded-full blur-3xl"
          animate={{
            x: [-50, 0, -50],
            y: [50, 0, 50],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-black/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 18,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book <span className="text-black">Now</span>
            </h1>
            <div className="w-20 h-1 bg-black mx-auto"></div>
          </motion.div>

          <Tabs defaultValue="attend" className="mb-12">
            <TabsList className="grid grid-cols-2 mb-8 bg-gray-100 border border-gray-200 p-1">
              <TabsTrigger 
                value="attend" 
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Attend
              </TabsTrigger>
              <TabsTrigger 
                value="contact" 
                className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg text-gray-700 hover:text-black"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attend" className="space-y-6">
              <motion.h2 
                variants={item} 
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Register to Attend
              </motion.h2>

              <motion.div 
                variants={item}
                className="bg-gray-50 backdrop-blur-md p-8 rounded-lg mb-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6 text-center text-black flex items-center justify-center">
                  <Sparkles className="w-5 h-5 mr-2 text-black" />
                  Secure Your Spot
                </h3>

                <form className="space-y-4 max-w-md mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-800">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-800">
                      Business Email *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1 text-gray-800">
                      Company Name *
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="job" className="block text-sm font-medium mb-1 text-gray-800">
                      Job Title *
                    </label>
                    <input 
                      type="text" 
                      id="job" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-800">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20" 
                      required 
                    />
                  </div>

                  <div>
                    <label htmlFor="ticket" className="block text-sm font-medium mb-1 text-gray-800">
                      Ticket Type *
                    </label>
                    <select 
                      id="ticket" 
                      className="w-full p-2 bg-white border border-gray-300 rounded-md text-black focus:border-black focus:ring-black/20" 
                      required
                    >
                      <option value="">Select a ticket type</option>
                      <option value="standard">Standard Pass</option>
                      <option value="premium">Premium Pass</option>
                      <option value="vip">VIP Pass</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-2 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300"
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{ 
                          opacity: [1, 0.8, 1], 
                          transition: { duration: 1.5, repeat: Infinity } 
                        }}
                      >
                        Register Now
                      </motion.span>
                    </button>
                  </div>
                </form>
              </motion.div>

              <motion.div 
                variants={item}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-black">Standard Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Access to all sessions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Networking opportunities
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Lunch and refreshments
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Digital event materials
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$299</div>
                </div>

                <div className="bg-gray-100 backdrop-blur-md p-6 rounded-lg border border-black/30 relative hover:shadow-lg shadow-md">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs font-bold py-1 px-3 rounded-full">
                    MOST POPULAR
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">Premium Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      All Standard Pass benefits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Priority seating
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Exclusive networking event
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      1-on-1 meeting scheduler
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Awards dinner access
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$599</div>
                </div>

                <div className="bg-white backdrop-blur-md p-6 rounded-lg border border-gray-200 hover:border-black/30 transition-all duration-300 hover:shadow-lg shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-black">VIP Pass</h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      All Premium Pass benefits
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      VIP lounge access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Speaker dinner invitation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Exclusive workshop access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Recorded sessions access
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 text-black mr-2 mt-0.5" />
                      Personalized agenda support
                    </li>
                  </ul>
                  <div className="text-center text-xl font-bold text-black">$999</div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <motion.h2 
                variants={item}
                className="text-2xl font-bold mb-6 text-gray-800"
              >
                Contact Us
              </motion.h2>

              <motion.div 
                variants={item}
                className="grid md:grid-cols-2 gap-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-black">Get in Touch</h3>
                  <p className="text-gray-700 mb-6">
                    Have questions about the Africa FinTech Fest & Awards? Our team is here to help. Reach out to us
                    using the contact form or the information provided.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                          <Mail className="h-5 w-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-black">Email Us</p>
                        <a href="mailto:info@africafintechfest.com" className="text-sm text-gray-700 hover:text-black transition-colors">
                          info@africafintechfest.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center">
                          <Phone className="h-5 w-5 text-black" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-black">Call Us</p>
                        <a href="tel:+27123456789" className="text-sm text-gray-700 hover:text-black transition-colors">
                          +27 12 345 6789
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h4 className="font-medium mb-2 text-black">Event Location</h4>
                    <p className="text-sm text-gray-700">
                      Johannesburg, South Africa
                      <br />
                      Venue details to be announced
                    </p>
                  </div>
                </div>

                <div>
                  <form className="space-y-4 bg-gray-50 backdrop-blur-md p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-1 text-gray-800">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-1 text-gray-800">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium mb-1 text-gray-800">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium mb-1 text-gray-800">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        className="w-full p-2 bg-white border border-gray-300 rounded-md text-black placeholder:text-gray-500 focus:border-black focus:ring-black/20"
                        required
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md shadow-lg hover:bg-gray-800 transition-all duration-300"
                      >
                        <motion.span
                          initial={{ opacity: 1 }}
                          whileHover={{ 
                            opacity: [1, 0.8, 1], 
                            transition: { duration: 1.5, repeat: Infinity } 
                          }}
                        >
                          Send Message
                        </motion.span>
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}
