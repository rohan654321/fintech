"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  bio: z.string().min(10, { message: "Bio is required" }).max(500, { message: "Bio cannot exceed 500 words" }),
  topicTitle: z.string().min(5, { message: "Topic title is required" }),
  topicDescription: z
    .string()
    .min(10, { message: "Topic description is required" })
    .max(500, { message: "Topic description cannot exceed 500 words" }),
  previousExperience: z.string().optional(),
  linkedIn: z.string().optional(),
  twitter: z.string().optional(),
  heardAbout: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function SpeakersPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("speakers")

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      bio: "",
      topicTitle: "",
      topicDescription: "",
      previousExperience: "",
      linkedIn: "",
      twitter: "",
      heardAbout: "",
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-white hero-gradient">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Speakers</h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Connect with industry leaders and innovators shaping the future of fintech
          </p>
          <div className="inline-flex items-center p-1 bg-white rounded-md">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "speakers" ? "bg-primary text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("speakers")}
            >
              Speakers
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === "apply" ? "bg-primary text-white" : "text-gray-700"
              }`}
              onClick={() => setActiveTab("apply")}
            >
              Apply to Speak
            </button>
          </div>
        </div>
      </section>

      {activeTab === "speakers" ? (
        <section className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-8 text-2xl font-bold">Featured Speakers</h2>
              <div className="p-8 mb-8 bg-white rounded-lg shadow-md">
                <Image
                  src="/placeholder.svg?height=120&width=120"
                  alt="Speakers Coming Soon"
                  width={120}
                  height={120}
                  className="mx-auto mb-6"
                />
                <h3 className="mb-4 text-xl font-semibold">Speakers To Be Announced</h3>
                <p className="mb-6 text-gray-600">
                  We're in the process of confirming our lineup of industry-leading speakers for the Global Fintech
                  Summit 2025. Check back soon for updates or follow us on social media for speaker announcements.
                </p>
                <p className="mb-6 text-gray-600">
                  Are you an industry expert interested in speaking at the Global Fintech Summit? We're looking for
                  thought leaders to share insights on digital transformation, embedded finance, payments innovation,
                  and more.
                </p>
                <Button onClick={() => setActiveTab("apply")}>Apply to Speak</Button>
              </div>

              <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
                {/* These will be populated when speakers are announced */}
                {/* Placeholder for future speakers */}
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="hidden">
                      <Card>
                        <CardContent className="p-6 text-center">
                          <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                            <Image
                              src="/placeholder.svg?height=128&width=128"
                              alt="Speaker"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="mb-1 text-xl font-semibold">Speaker Name</h3>
                          <p className="mb-3 text-sm text-gray-500">Job Title, Company</p>
                          <p className="mb-4 text-sm text-gray-700">Speaker bio and description will appear here.</p>
                          <div className="flex justify-center space-x-3">
                            <Link href="#" className="text-gray-500 hover:text-primary">
                              <span className="sr-only">LinkedIn</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-primary">
                              <span className="sr-only">Twitter</span>
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                              </svg>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-8 text-2xl font-bold text-center">Apply to Speak</h2>

              {isSubmitted ? (
                <div className="p-8 text-center bg-white rounded-lg shadow-md">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="mb-4 text-xl font-bold">Application Submitted!</h3>
                  <p className="mb-6 text-gray-700">
                    Thank you for your interest in speaking at the Global Fintech Summit 2025. Our team will review your
                    application and contact you if there's a match with our program.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)}>Submit Another Application</Button>
                </div>
              ) : (
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-6 text-gray-700">
                      Share your expertise with an audience of fintech leaders, innovators, and decision-makers.
                      Complete the form below to be considered for a speaking opportunity at the Global Fintech Summit
                      2025.
                    </p>

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Personal Information</h3>

                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="john.doe@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company/Organization</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Company name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="jobTitle"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Job Title</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your position" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Professional Bio</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please provide a brief professional biography (max 500 words)"
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Speaking Proposal</h3>

                          <FormField
                            control={form.control}
                            name="topicTitle"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Proposed Topic Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter the title of your proposed talk" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="topicDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Topic Description</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please describe your topic and why it would be valuable for our audience (max 500 words)"
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="previousExperience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Previous Speaking Experience</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Please share any relevant speaking experience, including events, webinars, or panels"
                                    className="min-h-[100px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold">Additional Information</h3>

                          <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                              control={form.control}
                              name="linkedIn"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>LinkedIn Profile URL</FormLabel>
                                  <FormControl>
                                    <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="twitter"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Twitter/X Handle</FormLabel>
                                  <FormControl>
                                    <Input placeholder="@yourhandle" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="heardAbout"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How did you hear about this speaking opportunity?</FormLabel>
                                <FormControl>
                                  <Input placeholder="Email, social media, colleague, etc." {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="pt-4 text-center">
                          <p className="mb-4 text-sm text-gray-500">
                            Our team will review your application and contact you if there's a match with our program.
                          </p>
                          <Button type="submit" size="lg">
                            Submit Application
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

