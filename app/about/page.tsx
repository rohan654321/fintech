import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import BrochureForm from "@/components/brochure-form"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Overview Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6 text-3xl font-bold text-center md:text-4xl">About</h1>
            <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Global Fintech Summit SA 2025 sets the agenda for the future of banking and Fintech in South Africa. The
              Global Fintech Summit 2025 is poised to be a landmark event, bringing together industry leaders,
              innovators, and policymakers to shape the future of banking and fintech. As the financial technology
              landscape continues to evolve at a rapid pace, the summit will focus on key trends, challenges, and
              opportunities that will define the next era of fintech.
            </p>
            <div className="flex justify-center mt-8 bg-blue-500 text-white">
              <Button>Download Brochure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center">Discussion Points at a Glance</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Digital Transformation in Banking</h3>
                  <ul className="pl-5 space-y-2 list-disc">
                    <li>
                      Open Banking and APIs: Exploring how open banking frameworks and APIs are enabling greater
                      collaboration between traditional banks and fintech startups.
                    </li>
                    <li>
                      Cloud-Native Banking: The shift toward cloud-based infrastructure to enhance scalability,
                      security, and innovation.
                    </li>
                    <li>
                      AI and Machine Learning: Leveraging AI for personalized banking experiences, fraud detection, and
                      risk management.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">The Rise of Embedded Finance</h3>
                  <ul className="pl-5 space-y-2 list-disc">
                    <li>
                      Seamless Integration: How embedded finance is becoming a core component of non-financial
                      platforms, from e-commerce to healthcare.
                    </li>
                    <li>
                      Partnership Models: Collaboration between fintechs, banks, and tech giants to deliver financial
                      services within everyday apps and platforms.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Payments Innovation</h3>
                  <ul className="pl-5 space-y-2 list-disc">
                    <li>
                      Real-Time Payments: The global adoption of real-time payment systems and their impact on
                      cross-border transactions.
                    </li>
                    <li>
                      CBDCs and Digital Currencies: Central Bank Digital Currencies (CBDCs) and their role in the future
                      of payments.
                    </li>
                    <li>
                      Cryptocurrency and Blockchain: The integration of crypto payments into mainstream financial
                      systems and the regulatory challenges involved.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Financial Inclusion</h3>
                  <ul className="pl-5 space-y-2 list-disc">
                    <li>
                      Digital Identity Solutions: Using fintech to provide secure digital identities for underserved
                      populations.
                    </li>
                    <li>
                      Microfinance and Neobanks: The role of neobanks and microfinance institutions in expanding access
                      to financial services.
                    </li>
                    <li>
                      AI-Driven Credit Scoring: Innovative approaches to credit assessment for individuals and SMEs with
                      limited credit history.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4 text-gray-600">
                And many more topics including Regulation and Compliance, Sustainability, Future of Work, Emerging
                Technologies, Cybersecurity, and Global Collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-2xl font-bold text-center">What to Expect in 2025</h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">World-Class Insights</h3>
                  <p className="text-gray-700">
                    Step into the spotlight with us and explore a meticulously crafted agenda packed with insights on
                    the most pressing topics shaping the future of banking and fintech. Dive into ground breaking
                    discussions on lending innovation, Digital ID, financial crime prevention, AI-driven operations,
                    next-generation customer experiences, open banking strategies, SME banking evolution, merchant
                    payment trends, digital currencies, and so much more. This is where transformation begins—don't miss
                    your chance to be part of the conversation!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Global Landscape</h3>
                  <p className="text-gray-700">
                    We bring together the entire banking, fintech and payments ecosystem in one place—uniting industry
                    giants, emerging challengers, key regulators, policymakers, BigTech leaders, and innovative wallet
                    disruptors. This is your opportunity to connect with the key players shaping the future of the
                    industry.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Elite Executive Arena</h3>
                  <p className="text-gray-700">
                    Global Fintech Summit connects you with visionary leaders, featuring C-suite speakers from leading
                    banks, insurance companies, and top fintech firms across South Africa. Gain exclusive insights into
                    their success stories and discover how senior executives are tackling today's most pressing
                    strategic challenges.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Dynamic and Leadership-Driven Conversations</h3>
                  <p className="text-gray-700">
                    Global Fintech Summit fuels the discussions that shape the future of the commercial world. Engage in
                    one-on-one meetings, interactive discussions, focused roundtables, and structured networking
                    opportunities. Connect with an audience where 75% hold C-Level, Director, VP, or Head positions
                    within the Banking and Fintech sector.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Startup Nexus</h3>
                  <p className="text-gray-700">
                    Dive into our Startup Nexus, a dynamic space crafted to unite ground breaking start-ups, visionary
                    VCs, and top investors for two transformative days. Gain exclusive insights from trailblazing
                    founders, forge powerful connections, and fast-track game-changing partnerships in the fast-paced
                    world of FinTech. This is where innovation meets opportunity—don't miss out!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl font-semibold">Fintech Pioneer Awards</h3>
                  <p className="text-gray-700">
                    Step into the spotlight at the Fintech Pioneer Awards—celebrating the bold visionaries and ground
                    breaking innovations transforming the future of finance. Join us to honour the trailblazers
                    redefining the industry and shaping tomorrow's financial landscape. Be inspired, be recognized, and
                    be part of the revolution!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8 text-2xl font-bold">Advisory Board</h2>
            <p className="mb-8 text-lg text-gray-600">To be announced</p>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 text-2xl font-bold text-center">Key Takeaways</h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              The Global Fintech Summit 2025 will underscore the importance of collaboration, innovation, and
              inclusivity in shaping the future of banking and payments. As the industry continues to break new ground,
              the summit will serve as a platform for stakeholders to align on a shared vision for a more connected,
              secure, and sustainable financial ecosystem.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              Stay tuned for ground breaking announcements, product launches, and strategic partnerships that will
              emerge from this pivotal event!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-blue-800 text-white">Download Brochure</Button>
              <Link href="/attend">
                <Button variant="outline">Attend as a Delegate</Button>
              </Link>
              <Link href="/sponsor">
                <Button variant="outline">Become a Sponsor</Button>
              </Link>
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

