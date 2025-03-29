"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const formSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required" }),
  website: z.string().optional(),
  contactPerson: z.string().min(2, { message: "Contact person is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  category: z.string().min(1, { message: "Please select a category" }),
  description: z
    .string()
    .min(10, { message: "Description is required" })
    .max(250, { message: "Description cannot exceed 250 words" }),
  innovation: z
    .string()
    .min(10, { message: "Innovation details are required" })
    .max(300, { message: "Innovation details cannot exceed 300 words" }),
  evidence: z
    .string()
    .min(10, { message: "Supporting evidence is required" })
    .max(300, { message: "Supporting evidence cannot exceed 300 words" }),
  links: z.string().optional(),
  socialMedia: z.string().optional(),
  nominatorName: z.string().min(2, { message: "Your name is required" }),
  nominatorOrg: z.string().optional(),
  nominatorEmail: z.string().email({ message: "Invalid email address" }),
  nominatorPhone: z.string().min(5, { message: "Phone number is required" }),
  termsAgreed: z.boolean().refine((val) => val === true, { message: "You must agree to the terms and conditions" }),
})

type FormValues = z.infer<typeof formSchema>

export default function AwardsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showTerms, setShowTerms] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      website: "",
      contactPerson: "",
      email: "",
      phone: "",
      country: "",
      category: "",
      description: "",
      innovation: "",
      evidence: "",
      links: "",
      socialMedia: "",
      nominatorName: "",
      nominatorOrg: "",
      nominatorEmail: "",
      nominatorPhone: "",
      termsAgreed: false,
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="max-w-2xl p-8 mx-auto text-center bg-white rounded-lg shadow-md">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="mb-4 text-2xl font-bold">Nomination Submitted!</h2>
          <p className="mb-6 text-gray-700">
            Thank you for your nomination to the Fintech Pioneer Awards. Your submission has been received and will be
            reviewed by our judging panel.
          </p>
          <p className="mb-8 text-gray-700">
            We will contact you if we need any additional information about your nomination.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Submit Another Nomination</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 text-white hero-gradient">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Fintech Pioneer Awards</h1>
          <p className="max-w-3xl mx-auto mb-4 text-lg">
            Nominate a trailblazing fintech innovator or solution that is redefining the future of financial services at
            the Fintech Pioneer Awards!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Award Categories</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">1. Best Digital Payments Solution</h3>
                  <p className="text-gray-700">
                    Recognizing innovative payment platforms that enhance speed, security, and accessibility in digital
                    transactions. This award honors solutions that are transforming the way consumers and businesses
                    make payments.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">2. Blockchain Innovation of the Year</h3>
                  <p className="text-gray-700">
                    Celebrating breakthrough applications of blockchain technology in financial services. This award
                    acknowledges companies leveraging blockchain for transparency, security, and efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">3. AI-Powered Fintech Solution</h3>
                  <p className="text-gray-700">
                    Honoring fintech solutions that harness artificial intelligence to revolutionize financial
                    decision-making. From fraud detection to personalized financial services, this category highlights
                    AI-driven advancements.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">4. Best WealthTech Solution</h3>
                  <p className="text-gray-700">
                    Recognizing platforms that make investing, wealth management, and financial planning more accessible
                    and efficient. This award is for companies democratizing financial growth through technology.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">5. Most Disruptive Fintech Startup</h3>
                  <p className="text-gray-700">
                    Awarding a rising startup that is redefining financial services with ground-breaking technology.
                    This category celebrates fresh, bold ideas reshaping the fintech ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">6. Embedded Finance Leader</h3>
                  <p className="text-gray-700">
                    Recognizing companies seamlessly integrating financial services into non-financial platforms. This
                    award highlights solutions that make banking, lending, and payments more accessible within everyday
                    applications.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">7. RegTech Solution of the Year</h3>
                  <p className="text-gray-700">
                    Celebrating technology-driven compliance and risk management solutions that help financial
                    institutions navigate regulatory complexities. This award honors innovations that enhance security
                    and governance.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">8. Best InsurTech Innovation</h3>
                  <p className="text-gray-700">
                    Recognizing game-changing technology in the insurance sector, from AI-driven underwriting to digital
                    claims processing. This award is for companies redefining how insurance services are delivered.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">9. Financial Inclusion Initiative</h3>
                  <p className="text-gray-700">
                    Honoring fintech solutions that promote financial accessibility for underserved communities. This
                    category celebrates efforts to bridge gaps in banking, credit, and investment opportunities.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">10. Fintech Leader of the Year</h3>
                  <p className="text-gray-700">
                    Recognizing an individual driving innovation and impact in the fintech space. This award honors
                    visionary leadership that is shaping the future of financial technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center">Nomination Form</h2>
            <Card>
              <CardContent className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Nominee Details</h3>

                      <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company/Individual Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Website (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="https://example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="contactPerson"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contact Person</FormLabel>
                              <FormControl>
                                <Input placeholder="Contact name" {...field} />
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
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1234567890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country/Region</FormLabel>
                              <FormControl>
                                <Input placeholder="Country" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Award Category (Select One)</FormLabel>
                            <FormControl>
                              <select
                                className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="">Select a category</option>
                                <option value="Best Digital Payments Solution">Best Digital Payments Solution</option>
                                <option value="Blockchain Innovation of the Year">
                                  Blockchain Innovation of the Year
                                </option>
                                <option value="AI-Powered Fintech Solution">AI-Powered Fintech Solution</option>
                                <option value="Best WealthTech Solution">Best WealthTech Solution</option>
                                <option value="Most Disruptive Fintech Startup">Most Disruptive Fintech Startup</option>
                                <option value="Embedded Finance Leader">Embedded Finance Leader</option>
                                <option value="RegTech Solution of the Year">RegTech Solution of the Year</option>
                                <option value="Best InsurTech Innovation">Best InsurTech Innovation</option>
                                <option value="Financial Inclusion Initiative">Financial Inclusion Initiative</option>
                                <option value="Fintech Leader of the Year">Fintech Leader of the Year</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Nomination Details</h3>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Brief Description of the Nominee (Max 250 words)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Provide an overview of the nominee, their achievements, and why they deserve this award."
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
                        name="innovation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Key Innovation & Impact (Max 300 words)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe the nominee's key innovation, how it stands out, and its impact on the fintech industry."
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
                        name="evidence"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Supporting Evidence (Max 300 words)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Provide measurable results, case studies, testimonials, or industry recognition supporting the nomination."
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
                        name="links"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Links to Additional Materials (if any)</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Website, press coverage, awards, videos, or other supporting documentation"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="socialMedia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Social Media Handles (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="LinkedIn, Twitter, or other relevant platforms" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Nominator Details</h3>

                      <FormField
                        control={form.control}
                        name="nominatorName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nominatorOrg"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Organization (if applicable)</FormLabel>
                            <FormControl>
                              <Input placeholder="Your organization" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="nominatorEmail"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nominatorPhone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+1234567890" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="termsAgreed"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                            <FormControl>
                              <input
                                type="checkbox"
                                className="w-4 h-4 mt-1"
                                checked={field.value}
                                onChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I confirm that the information provided is accurate to the best of my knowledge and I
                                agree to the{" "}
                                <button
                                  type="button"
                                  className="text-primary underline"
                                  onClick={() => setShowTerms(true)}
                                >
                                  terms and conditions
                                </button>{" "}
                                of the Fintech Pioneer Awards.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="pt-4 text-center">
                      <p className="mb-4 text-sm text-gray-500">Submission Deadline: 20th June 2025</p>
                      <Button type="submit" size="lg">
                        Submit Your Nomination
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="max-w-2xl p-6 bg-white rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
            <h2 className="mb-4 text-2xl font-bold">Fintech Pioneer Awards – Terms & Conditions</h2>

            <div className="mb-6 space-y-4">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Eligibility</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>
                    The awards are open to companies, startups, individuals, and organizations operating in the fintech
                    sector.
                  </li>
                  <li>Nominations can be submitted by individuals or organizations, including self-nominations.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Nomination Process</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>All nominations must be submitted through the official nomination form before the deadline.</li>
                  <li>
                    Each nomination must include accurate and complete information; incomplete entries may be
                    disqualified.
                  </li>
                  <li>
                    Nominees may be required to provide additional supporting documents if requested by the organizers.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Selection & Judging</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>A panel of independent industry experts will review all nominations.</li>
                  <li>
                    Winners will be selected based on innovation, impact, market adoption, and industry contribution.
                  </li>
                  <li>The decision of the judging panel is final and cannot be challenged or appealed.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Confidentiality & Data Protection</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>
                    All nomination data will be treated with strict confidentiality and used solely for the awards
                    process.
                  </li>
                  <li>
                    By submitting a nomination, participants agree that their details may be used for award-related
                    promotions.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Awards & Recognition</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>Winners will receive an official award and recognition at the awards ceremony.</li>
                  <li>
                    The organizers reserve the right to feature winners in press releases, social media, and marketing
                    materials.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Disqualification & Withdrawal</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>
                    The organizers reserve the right to disqualify any nominee found to have provided false or
                    misleading information.
                  </li>
                  <li>Nominations may be withdrawn by written request before the judging process begins.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Event Changes & Cancellation</h3>
                <ul className="pl-5 space-y-1 list-disc">
                  <li>The organizers reserve the right to modify event details, categories, or dates if necessary.</li>
                  <li>If unforeseen circumstances arise, the awards may be postponed or canceled without liability.</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold">Acceptance of Terms</h3>
                <p>By submitting a nomination, participants confirm their acceptance of these terms and conditions.</p>
                <p className="mt-2">For further inquiries, please contact awards@globalfintechsummit.com</p>
              </div>
            </div>

            <div className="text-center">
              <Button onClick={() => setShowTerms(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

