"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Check, ArrowRight, Award, Users, Zap, Globe, Megaphone, Calendar, Sparkles } from 'lucide-react'
import ButtonLink from "@/components/ui/button-link"

export default function BecomeSponsorPage() {
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
    <div className="min-h-screen bg-blue-950 text-cyan-50 pt-24 pb-16">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-blue-950"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"
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
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl"
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
          className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl"
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
            backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl mx-auto">
          <motion.div variants={item} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-gray-600">
              Become a <span className="text-amber-500">Sponsor</span>
            </h1>
            <div className="w-20 h-1 bg-gray-600 mx-auto "></div>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
              Join leading organizations in shaping the future of fintech in Africa through our exclusive sponsorship
              opportunities.
            </p>
          </motion.div>

          {/* Hero section with animation */}
          <motion.div 
            variants={item} 
            className="relative overflow-hidden rounded-xl p-8 md:p-12 mb-16"
          >
            {/* Dynamic background with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-800 to-pink-800 overflow-hidden">
              {/* Animated circles */}
              <motion.div
                className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 15,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"
                animate={{
                  x: [0, -30, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 12,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 40, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 18,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              {/* Animated grid overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto text-white">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.3)",
                    "0 0 15px rgba(255,255,255,0.5)",
                    "0 0 5px rgba(255,255,255,0.3)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                }}
              >
                Elevate Your Brand at Africa&apos;s Premier Fintech Event
              </motion.h2>
              <p className="text-lg opacity-90 mb-8">
                Connect with industry leaders, showcase your solutions, and position your brand at the forefront of
                fintech innovation in Africa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonLink
                  href="#packages"
                  variant="secondary"
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-none shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                >
                  View Sponsorship Packages
                </ButtonLink>
                <ButtonLink
                  href="#apply"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Apply Now
                </ButtonLink>
              </div>
            </div>
          </motion.div>

          {/* Benefits section */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cyan-200">Why Sponsor Africa Fintech Fest?</h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 overflow-hidden relative hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-lg"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-200">Connect with Decision Makers</h3>
                  <p className="text-cyan-100">
                    Network with 500+ C-suite executives, directors, and key decision makers from across the African
                    fintech ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/30 backdrop-blur-md border-purple-800/50 overflow-hidden relative hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-lg"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-200">Enhance Brand Visibility</h3>
                  <p className="text-cyan-100">
                    Showcase your brand to a targeted audience of fintech professionals, investors, and industry
                    leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/30 backdrop-blur-md border-pink-800/50 overflow-hidden relative hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-lg"></div>
                <CardContent className="p-6 relative">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4">
                    <Megaphone className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-pink-200">Thought Leadership</h3>
                  <p className="text-cyan-100">
                    Position your company as an industry leader through speaking opportunities and content
                    collaboration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Sponsorship packages */}
          <motion.div variants={item} id="packages" className="mb-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cyan-200">Sponsorship Packages</h2>

            <Tabs defaultValue="platinum" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8 bg-blue-900/50 border border-blue-800 p-1">
                <TabsTrigger 
                  value="platinum" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-cyan-500/20 text-cyan-200 hover:text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Platinum
                </TabsTrigger>
                <TabsTrigger 
                  value="gold" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-yellow-500/20 text-cyan-200 hover:text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Gold
                </TabsTrigger>
                <TabsTrigger 
                  value="silver" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-gray-400 data-[state=active]:to-gray-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-gray-500/20 text-cyan-200 hover:text-white"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Silver
                </TabsTrigger>
              </TabsList>

              <TabsContent value="platinum">
                <Card className="bg-blue-900/30 backdrop-blur-md border-cyan-500/50 overflow-hidden relative">
                  <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Platinum Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-white/90">
                      Premium visibility and maximum engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Keynote speaking opportunity (20 minutes)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Premium exhibition space (6x3m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">10 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Logo on main stage backdrop and all event materials</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Full-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Sponsored email to attendee database</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Social media promotion (5 dedicated posts)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Access to VIP networking events</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Attendee list with contact information (subject to privacy consent)</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink 
                        href="#apply" 
                        variant="primary" 
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-none shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                      >
                        Apply for Platinum Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="gold">
                <Card className="bg-blue-900/30 backdrop-blur-md border-yellow-500/50 overflow-hidden relative">
                  <CardHeader className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Gold Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-white/90">
                      Enhanced visibility and engagement opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Panel participation opportunity</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Exhibition space (3x3m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">6 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Logo on event website and printed materials</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Half-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Social media promotion (3 dedicated posts)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Attendee list with contact information (subject to privacy consent)</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink 
                        href="#apply" 
                        variant="primary" 
                        size="lg"
                        className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-white border-none shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300"
                      >
                        Apply for Gold Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="silver">
                <Card className="bg-blue-900/30 backdrop-blur-md border-gray-400/50 overflow-hidden relative">
                  <CardHeader className="bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-t-lg">
                    <div className="flex justify-between items-center">
                      <CardTitle>Silver Sponsor</CardTitle>
                      <Award className="h-6 w-6" />
                    </div>
                    <CardDescription className="text-white/90">Solid presence with essential benefits</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Exhibition space (2x2m)</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                        <p className="text-cyan-100">3 complimentary event passes</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Logo on event website</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Quarter-page ad in event program</p>
                      </div>
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                        <p className="text-cyan-100">Social media promotion (1 dedicated post)</p>
                      </div>
                    </div>

                    <div className="mt-8 text-center">
                      <ButtonLink 
                        href="#apply" 
                        variant="primary" 
                        size="lg"
                        className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-300 hover:to-gray-400 text-white border-none shadow-lg shadow-gray-500/20 hover:shadow-gray-500/40 transition-all duration-300"
                      >
                        Apply for Silver Sponsorship
                      </ButtonLink>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Additional opportunities */}
          <motion.div variants={item} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cyan-200">Additional Sponsorship Opportunities</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-5 w-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-semibold text-cyan-200">Networking Reception Sponsor</h3>
                  </div>
                  <p className="text-cyan-100 mb-4">
                    Host the official networking reception with branded signage, custom cocktails, and speaking
                    opportunity.
                  </p>
                  <ButtonLink 
                    href="#apply" 
                    variant="outline" 
                    size="sm"
                    className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 hover:border-purple-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-5 w-5 text-purple-400 mr-2" />
                    <h3 className="text-xl font-semibold text-purple-200">Awards Ceremony Sponsor</h3>
                  </div>
                  <p className="text-cyan-100 mb-4">
                    Exclusive branding at the awards ceremony, opportunity to present an award, and recognition in all
                    awards materials.
                  </p>
                  <ButtonLink 
                    href="#apply" 
                    variant="outline" 
                    size="sm"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 hover:border-pink-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-400/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 text-pink-400 mr-2" />
                    <h3 className="text-xl font-semibold text-pink-200">Innovation Lab Sponsor</h3>
                  </div>
                  <p className="text-cyan-100 mb-4">
                    Brand the innovation showcase area where startups and new technologies are featured.
                  </p>
                  <ButtonLink 
                    href="#apply" 
                    variant="outline" 
                    size="sm"
                    className="border-pink-500/50 text-pink-300 hover:bg-pink-500/10 hover:border-pink-400 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>

              <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-semibold text-cyan-200">VIP Lounge Sponsor</h3>
                  </div>
                  <p className="text-cyan-100 mb-4">
                    Exclusive branding in the VIP lounge area with opportunity to host private meetings with key
                    attendees.
                  </p>
                  <ButtonLink 
                    href="#apply" 
                    variant="outline" 
                    size="sm"
                    className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  >
                    Inquire About This Opportunity
                  </ButtonLink>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Application form */}
          <motion.div variants={item} id="apply" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cyan-200">Apply for Sponsorship</h2>

            <Card className="bg-blue-900/30 backdrop-blur-md border-blue-800/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-950/50"></div>
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <CardContent className="p-8 relative">
                <form className="space-y-4 max-w-2xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-cyan-200">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-cyan-200">
                        Business Email *
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-1 text-cyan-200">
                        Company Name *
                      </label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="job" className="block text-sm font-medium mb-1 text-cyan-200">
                        Job Title *
                      </label>
                      <input 
                        type="text" 
                        id="job" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1 text-cyan-200">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required 
                      />
                    </div>

                    <div>
                      <label htmlFor="package" className="block text-sm font-medium mb-1 text-cyan-200">
                        Sponsorship Package *
                      </label>
                      <select 
                        id="package" 
                        className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 focus:border-cyan-400 focus:ring-cyan-400/20" 
                        required
                      >
                        <option value="">Select a package</option>
                        <option value="platinum">Platinum Sponsor</option>
                        <option value="gold">Gold Sponsor</option>
                        <option value="silver">Silver Sponsor</option>
                        <option value="reception">Networking Reception Sponsor</option>
                        <option value="awards">Awards Ceremony Sponsor</option>
                        <option value="innovation">Innovation Lab Sponsor</option>
                        <option value="vip">VIP Lounge Sponsor</option>
                        <option value="custom">Custom Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium mb-1 text-cyan-200">
                      Sponsorship Goals
                    </label>
                    <textarea
                      id="goals"
                      rows={3}
                      className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="What are your main objectives for sponsoring this event?"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-cyan-200">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 bg-blue-950/70 border border-blue-800 rounded-md text-cyan-50 placeholder:text-blue-400/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                      placeholder="Any specific requirements or questions?"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white py-3 rounded-md shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                      <motion.span
                        initial={{ opacity: 1 }}
                        whileHover={{ 
                          opacity: [1, 0.8, 1], 
                          transition: { duration: 1.5, repeat: Infinity } 
                        }}
                      >
                        Submit Sponsorship Application
                      </motion.span>
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonials or past sponsors */}
          <motion.div variants={item} className="mt-16 text-center">
            <p className="text-lg font-medium mb-4 text-cyan-100">Have questions about sponsorship opportunities?</p>
            <ButtonLink 
              href="/contact" 
              variant="outline" 
              size="lg" 
              className="gap-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
