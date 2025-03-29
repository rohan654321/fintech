import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MessageSquare, Calendar } from "lucide-react"
import BrochureForm from "@/components/brochure-form"

export default function AttendPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16 text-white hero-gradient">
        <div className="container px-4 mx-auto text-center md:px-6">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Why Attend</h1>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            The Global Fintech Summit offers you the opportunity to network with the most prominent leaders and
            innovators in the industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
              Download Brochure
            </Button>
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
              Attend as a Delegate
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-3xl font-bold text-center">Unlock Global Insights and Expertise</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Industry-Leading Speakers</h3>
                  <p className="text-gray-700">
                    Hear from top experts shaping the future of the industry. From CEOs to regulatory officials and
                    innovators, our speakers will share valuable insights and real-world experiences.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Two Days of Dynamic Content</h3>
                  <p className="text-gray-700">
                    Immerse yourself in the Global Fintech Summit with engaging presentations, roundtables, and
                    workshops. Whether you're interested in emerging risks, digital transformation, or customer
                    experience, there's a session tailored to your needs.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-16 mb-12 text-3xl font-bold text-center">Spark Transformative Connections</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Connect with Key Decision-Makers</h3>
                  <p className="text-gray-700">
                    With 75% of attendees at the 'Head-of'/Director level and above, the Global Fintech Summit offers
                    the ideal environment for impactful discussions and partnership opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Engage with a Diverse Network</h3>
                  <p className="text-gray-700">
                    Meet industry leaders, from established banking and payments executives to innovative FinTech
                    disruptors. These connections can pave the way for groundbreaking collaborations and new
                    opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="mt-16 mb-12 text-3xl font-bold text-center">Stay Ahead in FinTech</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Innovation and Disruption</h3>
                  <p className="text-gray-700">
                    Keep up with the latest advancements in FinTech through six dynamic stages covering ground-breaking
                    technologies and industry-changing trends.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Cutting-Edge Insights</h3>
                  <p className="text-gray-700">
                    Gain first-hand knowledge from leading companies and start-ups driving innovation. Discover how
                    emerging technologies can address industry challenges and unlock new opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-8 text-xl font-semibold">
                Join the Industry's Top Leaders. Seize the opportunity to connect with key accounts and maintain your
                competitive edge.
              </p>
              <p className="mb-8 text-lg">Stay ahead—be part of the conversation and lead the way in innovation!</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button>Download Brochure</Button>
                <Button variant="outline">Attend as a Delegate</Button>
                <Button variant="outline">Become a Sponsor</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Network with the Top Innovators in Banking and Fintech
            </h2>

            <div className="p-8 mb-12 text-center bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-semibold">Forge Meaningful Connections at Global Fintech Summit</h3>
              <p className="mb-6 text-lg text-gray-700">
                Engage with peers, partners, and potential clients through a variety of structured and informal
                networking opportunities designed to foster valuable relationships.
              </p>
            </div>

            <h3 className="mb-8 text-2xl font-semibold text-center">Build Meaningful Connections</h3>

            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mb-4 text-primary" />
                  <h4 className="mb-4 text-lg font-semibold">Connect with Industry Pioneers</h4>
                  <p className="text-gray-700">
                    Meet Top Fintech Leaders: The Global Fintech Summit gathers 250+ attendees, including C-suite
                    executives and tech innovators.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MessageSquare className="w-12 h-12 mb-4 text-primary" />
                  <h4 className="mb-4 text-lg font-semibold">Tailored 1-2-1 Meetings</h4>
                  <p className="text-gray-700">
                    Our dedicated team ensures you connect with the right people. Schedule personalized meetings with
                    key decision-makers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 mb-4 text-primary" />
                  <h4 className="mb-4 text-lg font-semibold">Engaging Discussions & Networking</h4>
                  <p className="text-gray-700">
                    Take part in structured discussions and informal networking sessions designed to build valuable
                    connections.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h3 className="mt-16 mb-8 text-2xl font-semibold text-center">What Awaits You in Johannesburg?</h3>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="mb-4 text-xl font-semibold">15 Hours of Networking</h4>
                  <p className="text-gray-700">
                    Over two days, immerse yourself in 15 hours of dedicated networking. Engage with industry peers,
                    build new connections, and forge valuable partnerships in a dynamic and collaborative setting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <h4 className="mb-4 text-xl font-semibold">A Dynamic Exhibition Space</h4>
                  <p className="text-gray-700">
                    Discover cutting-edge innovations and solutions in our bustling exhibition area. Connect with
                    leading providers, explore emerging technologies, and find answers to your biggest challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Nexus Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 mb-12 text-center bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-3xl font-bold">Startup Nexus</h2>
              <p className="mb-6 text-lg">Global Fintech Summit 2025</p>
              <p className="mb-6">10 – 11 July 2025 | Johannesburg, South Africa</p>
              <Button>Learn More</Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">
                  Introducing Startup Nexus – The Innovation Hub of Global Fintech Summit 2025
                </h3>
                <div className="mb-6">
                  <Button>Get More Info</Button>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-2xl font-semibold">A Launchpad for Start-up and Scale-Up Growth</h3>
                <p className="mb-6 text-gray-700">
                  This dedicated hub is built to accelerate the success of start-ups and scale-ups, featuring a dynamic
                  stage, exclusive networking space, and high-impact deal booths.
                </p>
                <p className="text-gray-700">
                  Startup Nexus unites the entire start up and scale-up ecosystem under one roof, offering an unmatched
                  platform for growth and collaboration. Whether you're seeking funding, expansion opportunities, or
                  strategic partnerships, this is the place to make it happen.
                </p>
              </div>
            </div>

            <div className="p-8 mt-12 mb-12 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-center">Startup Nexus Speakers</h3>
              <p className="mb-6 text-center text-gray-700">Register here if you wish to speak at Startup Nexus</p>
              <div className="text-center">
                <Button>Apply to Speak</Button>
              </div>
            </div>

            <div className="p-8 mb-12 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-center">WHO YOU'LL CONNECT WITH</h3>
              <p className="mb-6 text-center text-gray-700">
                Meet venture capitalists, corporate investors, accelerators, banking partnership leaders, startup
                founders, and entrepreneurs.
              </p>
              <p className="mb-6 text-center text-gray-700">
                This isn't just an event—it's a springboard for your ambitions. The stage is set, key players are coming
                together, and the possibilities are endless. Will you be there to seize the moment?
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-center">Exclusive VC & Investor Passes</h3>
              <p className="mb-6 text-center text-gray-700">
                Are you a venture capitalist or investor? We're offering a limited number of complimentary passes for
                our VC and investor community to experience Startup Nexus.
              </p>
              <p className="mb-6 text-center text-gray-700">
                Join us for two impactful days to connect with leading startups, fellow investors, and industry
                pioneers.
              </p>
              <div className="text-center">
                <Button>Apply For Your Complementary Pass</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fintech Pioneer Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-3xl font-bold text-center">Fintech Pioneer Awards</h2>
            <p className="mb-6 text-lg text-gray-700">
              The Fintech Pioneer Awards celebrate innovation, excellence, and leadership in the rapidly evolving
              financial technology sector. Recognizing ground-breaking companies, visionary leaders, and disruptive
              solutions, the awards highlight those shaping the future of digital finance. From payment innovations and
              blockchain breakthroughs to AI-driven financial solutions, the event honours pioneers driving meaningful
              change in the industry.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Bringing together industry experts, investors, and startups, the Fintech Pioneer Awards serve as a
              platform to showcase cutting-edge advancements and foster collaboration. Whether recognizing established
              enterprises or emerging disruptors, the awards shine a spotlight on those redefining the financial
              landscape.
            </p>
            <div className="text-center">
              <Link href="/attend/awards">
                <Button size="lg">Nominate for Fintech Pioneer Awards</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brochure Form */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-md mx-auto">
            <BrochureForm />
          </div>
        </div>
      </section>
    </div>
  )
}

