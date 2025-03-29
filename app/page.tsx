import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, Users, Presentation, Clock } from "lucide-react"
import BrochureForm from "@/components/brochure-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white hero-gradient bg-blue-800">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Global Fintech Summit & Awards 2025
                </h1>
                <p className="mt-4 text-xl">Empowering the Future of Finance: Technology, Trust & Transformation</p>
                <p className="mt-2 text-lg">Africa's Premier Banking & Fintech Summit</p>
                <p className="mt-2 font-medium">10 – 11 July 2025, Johannesburg, South Africa</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-6 text-blue-900">
                <Link href="/sponsor">
                  <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    Sponsorship Options
                  </Button>
                </Link>
                <Link href="/book-now">
                  <Button className="text-white bg-blue-500">Buy Tickets</Button>
                </Link>
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Global Fintech Summit"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="stat-card">
              <Users className="w-10 h-10 mb-2 text-primary text-blue-400" />
              <span className="text-3xl font-bold">500+</span>
              <span className="text-sm text-gray-600">Attendees</span>
            </div>
            <div className="stat-card">
              <Presentation className="w-10 h-10 mb-2 text-primary  text-blue-400" />
              <span className="text-3xl font-bold">35+</span>
              <span className="text-sm text-gray-600">Speakers</span>
            </div>
            <div className="stat-card">
              <CalendarDays className="w-10 h-10 mb-2 text-primary  text-blue-400" />
              <span className="text-3xl font-bold">12+</span>
              <span className="text-sm text-gray-600">Industry Sessions</span>
            </div>
            <div className="stat-card">
              <Clock className="w-10 h-10 mb-2 text-primary  text-blue-400" />
              <span className="text-3xl font-bold">5+</span>
              <span className="text-sm text-gray-600">Hours of Networking</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              At the heart of the world's most dynamic and forward-thinking brands and organizations, we are the trusted
              partner for industry trailblazers, delivering game-changing insights, sparking collaboration, and crafting
              innovative solutions that forge powerful partnerships.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Our premier global conferences are the ultimate destination for thousands of top-tier leaders in the
              banking and fintech sector. These aren't just events—they're transformative experiences where ideas
              ignite, challenges are conquered, and groundbreaking solutions take shape and this is where the future of
              banking and fintech is built.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Ready to rise above the noise and keep the pulse of innovation beating strong? Join us and be part of the
              movement driving the industry forward.
            </p>
            <Link href="/sponsor">
              <Button size="lg" className="bg-blue-800 text-white">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h2 className="mb-4 text-2xl font-bold">Follow us on LinkedIn</h2>
          <p className="mb-6 text-gray-600">For industry updates and live speaker announcements</p>
          <Button variant="outline">Follow</Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Excited to explore the dynamic world of FinTech?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Attend as a Delegate</h3>
                  <p className="mb-6 text-gray-600">
                    Join industry leaders, innovators, and decision-makers for two days of insights, networking, and
                    collaboration.
                  </p>
                  <Link href="/attend">
                    <Button className="w-full bg-blue-600 text-white">Register Now</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-bold">Become a Sponsor</h3>
                  <p className="mb-6 text-gray-600">
                    Showcase your brand, solutions, and thought leadership to a targeted audience of fintech
                    professionals.
                  </p>
                  <Link href="/sponsor">
                    <Button className="w-full bg-blue-600 text-white">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Form */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-md mx-auto">
            <BrochureForm />
          </div>
        </div>
      </section>
    </div>
  )
}

