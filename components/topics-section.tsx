"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  BanknoteIcon as Bank,
  Layers,
  CreditCard,
  Users,
  Scale,
  Leaf,
  Briefcase,
  Cpu,
  Shield,
  Globe,
} from "lucide-react"

const topics = [
  {
    title: "Digital Transformation in Banking",
    icon: <Bank className="h-6 w-6" />,
    description: "Open Banking, Cloud-Native Banking, AI and Machine Learning applications.",
  },
  {
    title: "The Rise of Embedded Finance",
    icon: <Layers className="h-6 w-6" />,
    description: "Seamless integration and partnership models for financial services.",
  },
  {
    title: "Payments Innovation",
    icon: <CreditCard className="h-6 w-6" />,
    description: "Real-Time Payments, CBDCs, and Cryptocurrency integration.",
  },
  {
    title: "Financial Inclusion",
    icon: <Users className="h-6 w-6" />,
    description: "Digital Identity Solutions, Microfinance, and AI-Driven Credit Scoring.",
  },
  {
    title: "Regulation and Compliance",
    icon: <Scale className="h-6 w-6" />,
    description: "Global Regulatory Frameworks, AML, and ESG Compliance.",
  },
  {
    title: "Sustainability and Green Fintech",
    icon: <Leaf className="h-6 w-6" />,
    description: "Carbon Footprint Tracking, Green Investments, and Climate Risk Management.",
  },
  {
    title: "The Future of Work in Fintech",
    icon: <Briefcase className="h-6 w-6" />,
    description: "Talent Development, Remote Work Models, and Diversity in Fintech.",
  },
  {
    title: "Emerging Technologies",
    icon: <Cpu className="h-6 w-6" />,
    description: "Quantum Computing, Metaverse, and IoT applications in finance.",
  },
  {
    title: "Cybersecurity and Data Privacy",
    icon: <Shield className="h-6 w-6" />,
    description: "Zero-Trust Architectures, Data Sovereignty, and Biometric Authentication.",
  },
  {
    title: "Global Collaboration",
    icon: <Globe className="h-6 w-6" />,
    description: "Cross-Border Innovation, Fintech Hubs, and International Partnerships.",
  },
]

export default function TopicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-600/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-500">Discussion Points <span className="text-amber-500">at a Glance</span></h2>
          <div className="w-20 h-1 bg-amber-50/55 mx-auto"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-lg p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-border"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">{topic.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

