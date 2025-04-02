"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ButtonLink from "@/components/ui/button-link"
import { ArrowRight } from "lucide-react"
import { Card } from "./ui/card"
// import CounterStat from "./countStart"
import useCounter from "@/app/hooks/use-counter"
interface CounterStatProps {
  end: number
  label: string
  delay?: number
}

function CounterStat({ end, label, delay = 0 }: CounterStatProps) {
  const { count, observerRef } = useCounter({ end, delay })

  return (
    <motion.div
      ref={observerRef}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <p className="text-3xl font-bold text-primary mb-1">{count}+</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-900/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">The Future of Finance <span>Starts Here</span> </h2>
            <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At the heart of the world&apos;s most dynamic and forward-thinking brands and organizations, we are the trusted
              partner for industry trailblazers, delivering game-changing insights, sparking collaboration, and crafting
              innovative solutions that forge powerful partnerships.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our premier global conferences are the ultimate destination for thousands of top-tier leaders in the
              banking and fintech sector. These aren&apos;t just events—they&apos;re transformative experiences where ideas
              ignite, challenges are conquered, and groundbreaking solutions take shape and this is where the future of
              banking and fintech is built.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ready to rise above the noise and keep the pulse of innovation beating strong? Join us and be part of the
              movement driving the industry forward.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/sponsor" variant="primary" size="lg">
              Partner With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="https://linkedin.com" variant="outline" size="lg">
              Follow on LinkedIn
            </ButtonLink>
          </motion.div>

          <motion.div variants={item} className="mt-16 text-center">
            <h3 className="text-xl font-medium mb-6">Excited to explore the dynamic world of FinTech?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink href="/attend" variant="secondary">
                Attend as a Delegate
              </ButtonLink>
              <ButtonLink href="/sponsor" variant="outline">
                Become a Sponsor
              </ButtonLink>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="max-w-3xl mx-auto p-6 shadow-lg rounded-2xl bg-white/80 backdrop-blur-sm border-slate-700 mt-20 ">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center "
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                }}
              >
                <CounterStat end={500} label="Attendees" delay={0} />
                <CounterStat end={35} label="Speakers" delay={200} />
                <CounterStat end={12} label="Industry Sessions" delay={400} />
                <CounterStat end={15} label="Hours of Networking" delay={600} />
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

