"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Check, FileText, Send, ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useRouter } from "next/navigation"

export default function NominationForm() {
  const [formStep, setFormStep] = useState(0)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    awardCategory: '',
    description: '',
    innovation: '',
    evidence: '',
    links: '',
    socialMedia: '',
    nominatorName: '',
    nominatorOrg: '',
    nominatorEmail: '',
    nominatorPhone: '',
    termsAgreed: false,
    confirmAccuracy: false,
  });
  const router = useRouter()

  // Animation variants
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

  const awardCategories = [
    {
      id: "digital-payments",
      title: "Best Digital Payments Solution",
      description: "Recognizing innovative payment platforms that enhance speed, security, and accessibility.",
      icon: "💳",
    },
    {
      id: "blockchain",
      title: "Blockchain Innovation of the Year",
      description: "Celebrating breakthrough applications of blockchain technology.",
      icon: "⛓️",
    },
    {
      id: "ai-powered",
      title: "AI-Powered Fintech Solution",
      description: "Honoring solutions that revolutionize financial decision-making with AI.",
      icon: "🤖",
    },
    {
      id: "wealthtech",
      title: "Best WealthTech Solution",
      description: "Recognizing platforms making investing and wealth management more accessible.",
      icon: "📈",
    },
    {
      id: "disruptive-startup",
      title: "Most Disruptive Fintech Startup",
      description: "Awarding startups redefining financial services with ground-breaking tech.",
      icon: "🚀",
    },
    {
      id: "embedded-finance",
      title: "Embedded Finance Leader",
      description: "Recognizing seamless integration of financial services into non-financial platforms.",
      icon: "🧩",
    },
    {
      id: "regtech",
      title: "RegTech Solution of the Year",
      description: "Celebrating technology-driven compliance and risk management solutions.",
      icon: "🛡️",
    },
    {
      id: "insurtech",
      title: "Best InsurTech Innovation",
      description: "Recognizing game-changing technology in the insurance sector.",
      icon: "🏦",
    },
    {
      id: "financial-inclusion",
      title: "Financial Inclusion Initiative",
      description: "Honoring solutions promoting financial accessibility for underserved communities.",
      icon: "🌍",
    },
    {
      id: "leader",
      title: "Fintech Leader of the Year",
      description: "Recognizing an individual driving innovation and impact in fintech.",
      icon: "👑",
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      awardCategory: value,
    }));
  };

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
  
    try {
      // Validate required fields
      if (!formData.termsAgreed) {
        throw new Error('You must agree to the terms and conditions');
      }
  
      if (!formData.awardCategory) {
        throw new Error('Please select an award category');
      }
  
      if (!formData.confirmAccuracy) {
        throw new Error('Please confirm the information is accurate');
      }
  
      // Submit to API
      const response = await fetch('/api/nomination', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          throw new Error('This email has already been used for a nomination. Please use a different email.');
        }
        throw new Error(responseData.error || 'Failed to submit nomination');
      }
  
      setFormSubmitted(true);
    } catch (err: unknown) {
      let errorMessage = 'Failed to submit nomination';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (typeof err === 'string') {
        errorMessage = err;
      }
  
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mb-6">
            <Award className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fintech Pioneer <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Awards 2025</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nominate the most innovative fintech solutions and leaders shaping the future of finance.
          </p>
        </motion.div>

        {!formSubmitted ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Progress Sidebar */}
            <motion.div variants={item} className="lg:col-span-1">
              <Card className="border border-gray-200 shadow-sm bg-white/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">Nomination Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[0, 1, 2, 3].map((step) => (
                      <div key={step} className="flex items-start space-x-4">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep >= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium`}>
                          {step + 1}
                        </div>
                        <div>
                          <h3 className={`font-medium ${formStep === step ? 'text-indigo-600' : 'text-gray-600'}`}>
                            {step === 0 && "Nominee Details"}
                            {step === 1 && "Award Category"}
                            {step === 2 && "Nomination Details"}
                            {step === 3 && "Nominator Details"}
                          </h3>
                          {formStep === step && (
                            <p className="text-sm text-gray-500 mt-1">Current step</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Form */}
            <motion.div variants={item} className="lg:col-span-2">
              <Card className="border border-gray-200 shadow-sm bg-white/70 backdrop-blur-sm">
                <CardHeader className="border-b border-gray-200">
                  <CardTitle className="text-2xl font-bold text-gray-800">Nomination Form</CardTitle>
                  <CardDescription className="text-gray-600">
                    Complete all required fields to submit your nomination
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit}>
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 h-2 rounded-full mb-8">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(formStep + 1) * 25}%` }}
                      ></div>
                    </div>

                    {/* Step 1: Nominee Details */}
                    {formStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nominee Information</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="companyName" className="text-gray-700">
                              Company/Individual Name*
                            </Label>
                            <Input
                              id="companyName"
                              placeholder="Enter name"
                              required
                              value={formData.companyName}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="website" className="text-gray-700">
                              Website (if applicable)
                            </Label>
                            <Input
                              id="website"
                              placeholder="https://"
                              value={formData.website}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contactPerson" className="text-gray-700">
                              Contact Person*
                            </Label>
                            <Input
                              id="contactPerson"
                              placeholder="Full name"
                              required
                              value={formData.contactPerson}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700">
                              Email*
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="email@example.com"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700">
                              Phone Number*
                            </Label>
                            <Input
                              id="phone"
                              placeholder="+1 (555) 000-0000"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country" className="text-gray-700">
                              Country/Region*
                            </Label>
                            <Input
                              id="country"
                              placeholder="Country"
                              required
                              value={formData.country}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Award Category */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Award Category</h2>
                        <p className="text-gray-600 mb-6">Choose one category that best fits your nomination</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {awardCategories.map((category) => (
                            <div 
                              key={category.id} 
                              className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
                            >
                              <input
                                type="radio"
                                id={category.id}
                                name="awardCategory"
                                value={category.title}
                                checked={formData.awardCategory === category.title}
                                onChange={() => handleRadioChange(category.title)}
                                className="mt-0.5 h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xl">{category.icon}</span>
                                  <Label htmlFor={category.id} className="text-gray-800 font-medium cursor-pointer">
                                    {category.title}
                                  </Label>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">{category.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Nomination Details */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nomination Details</h2>
                        
                        <div className="space-y-6">
                          <div className="space-y-2">
                            <Label htmlFor="description" className="text-gray-700">
                              Brief Description (Max 250 words)*
                            </Label>
                            <p className="text-sm text-gray-500">
                              Overview of the nominee, their achievements, and why they deserve this award.
                            </p>
                            <Textarea
                              id="description"
                              placeholder="Enter description"
                              required
                              value={formData.description}
                              onChange={handleChange}
                              className="min-h-[120px] border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="innovation" className="text-gray-700">
                              Key Innovation & Impact (Max 300 words)*
                            </Label>
                            <p className="text-sm text-gray-500">
                              Describe the innovation, how it stands out, and its impact on fintech.
                            </p>
                            <Textarea
                              id="innovation"
                              placeholder="Enter key innovation and impact"
                              required
                              value={formData.innovation}
                              onChange={handleChange}
                              className="min-h-[120px] border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="evidence" className="text-gray-700">
                              Supporting Evidence (Max 300 words)*
                            </Label>
                            <p className="text-sm text-gray-500">
                              Measurable results, case studies, testimonials, or industry recognition.
                            </p>
                            <Textarea
                              id="evidence"
                              placeholder="Enter supporting evidence"
                              required
                              value={formData.evidence}
                              onChange={handleChange}
                              className="min-h-[120px] border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="links" className="text-gray-700">
                                Additional Materials (if any)
                              </Label>
                              <Textarea
                                id="links"
                                placeholder="Website, press coverage, awards, videos"
                                value={formData.links}
                                onChange={handleChange}
                                className="min-h-[80px] border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="socialMedia" className="text-gray-700">
                                Social Media Handles
                              </Label>
                              <Textarea
                                id="socialMedia"
                                placeholder="LinkedIn, Twitter, etc."
                                value={formData.socialMedia}
                                onChange={handleChange}
                                className="min-h-[80px] border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Nominator Details */}
                    {formStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Information</h2>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="nominatorName" className="text-gray-700">
                              Your Name*
                            </Label>
                            <Input
                              id="nominatorName"
                              placeholder="Full name"
                              required
                              value={formData.nominatorName}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nominatorOrg" className="text-gray-700">
                              Your Organization
                            </Label>
                            <Input
                              id="nominatorOrg"
                              placeholder="Organization name"
                              value={formData.nominatorOrg}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="nominatorEmail" className="text-gray-700">
                              Your Email*
                            </Label>
                            <Input
                              id="nominatorEmail"
                              type="email"
                              placeholder="email@example.com"
                              required
                              value={formData.nominatorEmail}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="nominatorPhone" className="text-gray-700">
                              Your Phone Number*
                            </Label>
                            <Input
                              id="nominatorPhone"
                              placeholder="+1 (555) 000-0000"
                              required
                              value={formData.nominatorPhone}
                              onChange={handleChange}
                              className="border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                        </div>

                        <div className="space-y-4 pt-4">
                          <div className="flex items-start space-x-3">
                            <Checkbox 
                              id="confirmAccuracy" 
                              checked={formData.confirmAccuracy}
                              onCheckedChange={(checked) => handleCheckboxChange('confirmAccuracy', checked as boolean)}
                              className="mt-0.5 border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                              required 
                            />
                            <div>
                              <Label htmlFor="confirmAccuracy" className="text-gray-700 font-medium cursor-pointer">
                                I confirm that the information provided is accurate
                              </Label>
                            </div>
                          </div>
                          <div className="flex items-start space-x-3">
                            <Checkbox 
                              id="termsAgreed" 
                              checked={formData.termsAgreed}
                              onCheckedChange={(checked) => handleCheckboxChange('termsAgreed', checked as boolean)}
                              className="mt-0.5 border-gray-300 text-indigo-600 focus:ring-indigo-500" 
                              required 
                            />
                            <div>
                              <Label htmlFor="termsAgreed" className="text-gray-700 font-medium cursor-pointer">
                                I agree to the terms and conditions
                              </Label>
                              <p className="text-sm text-gray-500 mt-1">
                                <a href="#terms" className="text-indigo-600 hover:text-indigo-800 hover:underline">
                                  View Terms & Conditions
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
                      {formStep > 0 ? (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setFormStep(formStep - 1)}
                          className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Previous
                        </Button>
                      ) : (
                        <div></div> // Empty div for spacing
                      )}

                      {formStep < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setFormStep(formStep + 1)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md"
                        >
                          Next
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button 
                            type="submit" 
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <Send className="mr-2 h-4 w-4" />
                                Submit Nomination
                              </span>
                            )}
                          </Button>
                        </motion.div>
                      )}
                    </div>

                    {/* Error display */}
                    {error && (
                      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                        <p>{error}</p>
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-100 to-green-50 mb-8 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nomination Submitted!
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your nomination. Our team will review your submission and notify you of the outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  setFormSubmitted(false)
                  setFormStep(0)
                  setFormData({
                    companyName: '',
                    website: '',
                    contactPerson: '',
                    email: '',
                    phone: '',
                    country: '',
                    awardCategory: '',
                    description: '',
                    innovation: '',
                    evidence: '',
                    links: '',
                    socialMedia: '',
                    nominatorName: '',
                    nominatorOrg: '',
                    nominatorEmail: '',
                    nominatorPhone: '',
                    termsAgreed: false,
                    confirmAccuracy: false,
                  })
                }}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Submit Another Nomination
              </Button>
              <Button
                onClick={() => router.push("/awards")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md"
              >
                Return to Awards Page
              </Button>
            </div>
          </motion.div>
        )}

        {/* Additional Information Sections */}
        {!formSubmitted && (
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
          >
            {/* Award Categories */}
            <motion.div variants={item}>
              <Card className="border border-gray-200 shadow-sm bg-white/70 backdrop-blur-sm h-full">
                <CardHeader className="border-b border-gray-200">
                  <CardTitle className="text-xl font-bold text-gray-800">Award Categories</CardTitle>
                  <CardDescription className="text-gray-600">
                    Detailed information about each award category
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {awardCategories.map((category) => (
                      <AccordionItem key={category.id} value={category.id}>
                        <AccordionTrigger className="text-gray-800 hover:text-indigo-600 hover:no-underline">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{category.icon}</span>
                            <span>{category.title}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 pl-11">
                          {category.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div variants={item} id="terms">
              <Card className="border border-gray-200 shadow-sm bg-white/70 backdrop-blur-sm h-full">
                <CardHeader className="border-b border-gray-200">
                  <CardTitle className="text-xl font-bold text-gray-800">Terms & Conditions</CardTitle>
                  <CardDescription className="text-gray-600">
                    Important information about the nomination process
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs defaultValue="eligibility">
                    <TabsList className="grid grid-cols-2 mb-6 bg-gray-100">
                      <TabsTrigger value="eligibility" className="text-gray-700 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Eligibility
                      </TabsTrigger>
                      <TabsTrigger value="process" className="text-gray-700 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Process
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="eligibility" className="text-gray-700 space-y-4">
                      <h3 className="font-semibold text-gray-800">Eligibility Criteria:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          The awards are open to companies, startups, individuals, and organizations operating in the
                          fintech sector.
                        </li>
                        <li>
                          Nominations can be submitted by individuals or organizations, including self-nominations.
                        </li>
                        <li>
                          Must have launched product/service within the last 3 years.
                        </li>
                      </ul>
                    </TabsContent>
                    <TabsContent value="process" className="text-gray-700 space-y-4">
                      <h3 className="font-semibold text-gray-800">Nomination Process:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          All nominations must be submitted through the official nomination form before the deadline.
                        </li>
                        <li>
                          Each nomination must include accurate and complete information; incomplete entries may be
                          disqualified.
                        </li>
                        <li>
                          Nominees may be required to provide additional supporting documents if requested by the
                          organizers.
                        </li>
                      </ul>
                    </TabsContent>
                  </Tabs>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-gray-600">
                      <span className="font-semibold">Deadline:</span> June 20, 2025
                    </p>
                    <p className="text-gray-600 mt-2">
                      <span className="font-semibold">Contact:</span>{" "}
                      <a href="mailto:awards@fintechpioneers.com" className="text-indigo-600 hover:underline">
                        awards@fintechpioneers.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Contact CTA */}
        {!formSubmitted && (
          <motion.div 
            variants={item}
            className="mt-16 text-center"
          >
            <Card className="border border-gray-200 shadow-sm bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Need assistance with your nomination?</h3>
                <p className="text-gray-600 mb-6">Our team is here to help you with any questions.</p>
                <Button
                  variant="outline"
                  className="border-indigo-300 text-indigo-600 hover:bg-white hover:text-indigo-700"
                  onClick={() => router.push("/contact")}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Contact Our Support Team
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}