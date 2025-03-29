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
import { CheckCircle, Info } from "lucide-react"

const formSchema = z.object({
  ticketType: z.string().min(1, { message: "Please select a ticket type" }),
  quantity: z.string().min(1, { message: "Please select quantity" }),
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(5, { message: "Phone number is required" }),
  company: z.string().min(2, { message: "Company name is required" }),
  jobTitle: z.string().min(2, { message: "Job title is required" }),
  dietaryRequirements: z.string().optional(),
  specialRequirements: z.string().optional(),
  promoCode: z.string().optional(),
  billingAddress: z.object({
    street: z.string().min(2, { message: "Street address is required" }),
    city: z.string().min(2, { message: "City is required" }),
    state: z.string().min(2, { message: "State/Province is required" }),
    postalCode: z.string().min(2, { message: "Postal code is required" }),
    country: z.string().min(2, { message: "Country is required" }),
  }),
  termsAccepted: z.boolean().refine((val) => val === true, { message: "You must accept the terms and conditions" }),
})

type FormValues = z.infer<typeof formSchema>

const ticketTypes = [
  {
    id: "early-bird",
    name: "Early Bird Ticket",
    price: 799,
    description: "Limited availability. Full access to all conference sessions, workshops, and networking events.",
    available: true,
  },
  {
    id: "standard",
    name: "Standard Ticket",
    price: 999,
    description: "Full access to all conference sessions, workshops, and networking events.",
    available: true,
  },
  {
    id: "vip",
    name: "VIP Ticket",
    price: 1499,
    description: "Premium access including exclusive networking sessions, priority seating, and VIP lounge access.",
    available: true,
  },
  {
    id: "group",
    name: "Group Ticket (5+ delegates)",
    price: 699,
    description: "Per person pricing for group bookings. Contact sales for custom packages.",
    available: true,
  },
]

export default function BookNowPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketType: "",
      quantity: "1",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      jobTitle: "",
      dietaryRequirements: "",
      specialRequirements: "",
      promoCode: "",
      billingAddress: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      termsAccepted: false,
    },
  })

  function onSubmit(data: FormValues) {
    console.log(data)
    setIsSubmitted(true)
  }

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicket(ticketId)
    form.setValue("ticketType", ticketId)
  }

  if (isSubmitted) {
    return (
      <div className="container px-4 py-16 mx-auto md:px-6">
        <div className="max-w-2xl p-8 mx-auto text-center bg-white rounded-lg shadow-md">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="mb-4 text-2xl font-bold">Booking Confirmed!</h2>
          <p className="mb-6 text-gray-700">
            Thank you for booking your ticket to the Global Fintech Summit 2025. You will receive a confirmation email
            shortly with your ticket details.
          </p>
          <div className="p-4 mb-6 text-left bg-gray-50 rounded-lg">
            <h3 className="mb-2 text-lg font-semibold">Next Steps:</h3>
            <ul className="ml-6 list-disc">
              <li className="mb-2">Check your email for booking confirmation</li>
              <li className="mb-2">Add the event to your calendar</li>
              <li className="mb-2">Join our LinkedIn community for updates</li>
              <li>Download the event app (available 1 month before the event)</li>
            </ul>
          </div>
          <Button onClick={() => setIsSubmitted(false)}>Book Another Ticket</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-white hero-gradient">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Book Your Ticket</h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg">Join us at Africa's Premier Banking & Fintech Summit</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Ticket Selection */}
            <div className="lg:col-span-1">
              <div className="sticky space-y-6 top-6">
                <h2 className="text-2xl font-bold">Select Your Ticket</h2>
                {ticketTypes.map((ticket) => (
                  <Card
                    key={ticket.id}
                    className={`cursor-pointer transition-all ${
                      selectedTicket === ticket.id ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => handleTicketSelect(ticket.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{ticket.name}</h3>
                        <p className="font-bold">${ticket.price}</p>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">{ticket.description}</p>
                      {!ticket.available && <p className="mt-2 text-sm text-red-500">Sold Out</p>}
                    </CardContent>
                  </Card>
                ))}

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Info className="w-5 h-5 mt-1 text-primary" />
                      <div>
                        <h3 className="font-semibold">Need Help?</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Contact our sales team for group bookings or special requirements.
                        </p>
                        <Button variant="link" className="p-0 mt-2">
                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Registration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Attendee Information</h3>

                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
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
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company</FormLabel>
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
                          name="quantity"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Number of Tickets</FormLabel>
                              <FormControl>
                                <select
                                  className="flex w-full h-10 px-3 py-2 text-sm border rounded-md border-input bg-background"
                                  {...field}
                                >
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                      {num} {num === 1 ? "ticket" : "tickets"}
                                    </option>
                                  ))}
                                  <option value="more">5+ tickets (Contact Sales)</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Additional Requirements</h3>

                        <FormField
                          control={form.control}
                          name="dietaryRequirements"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Dietary Requirements</FormLabel>
                              <FormControl>
                                <Input placeholder="Any dietary restrictions?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="specialRequirements"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Special Requirements</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any accessibility requirements or other special needs?"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Billing Information</h3>

                        <FormField
                          control={form.control}
                          name="billingAddress.street"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Street Address</FormLabel>
                              <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="billingAddress.city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                  <Input placeholder="City" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="billingAddress.state"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>State/Province</FormLabel>
                                <FormControl>
                                  <Input placeholder="State" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <FormField
                            control={form.control}
                            name="billingAddress.postalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Postal Code</FormLabel>
                                <FormControl>
                                  <Input placeholder="Postal code" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="billingAddress.country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Country</FormLabel>
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
                          name="promoCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Promo Code</FormLabel>
                              <FormControl>
                                <Input placeholder="Enter promo code if you have one" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="termsAccepted"
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
                              <FormLabel>I agree to the terms and conditions and privacy policy</FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <div className="pt-6 border-t">
                        <div className="flex justify-between mb-4">
                          <span className="font-semibold">Total Amount:</span>
                          <span className="text-xl font-bold">
                            ${selectedTicket ? ticketTypes.find((t) => t.id === selectedTicket)?.price || 0 : 0}
                          </span>
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Complete Booking
                        </Button>
                        <p className="mt-4 text-sm text-center text-gray-500">
                          Your booking will be confirmed via email
                        </p>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

