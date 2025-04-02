"use client"

import { useState, useEffect, useRef } from "react"

interface UseCounterProps {
  end: number
  start?: number
  duration?: number
  delay?: number
}

export default function useCounter({ end, start = 0, duration = 2000, delay = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start)
  const countRef = useRef(start)
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    countRef.current = start
    const step = (end - start) / (duration / 10)
    let timeout: NodeJS.Timeout

    const updateCount = () => {
      timeout = setTimeout(() => {
        countRef.current += step
        if (countRef.current < end) {
          setCount(Math.floor(countRef.current))
          updateCount()
        } else {
          setCount(end)
        }
      }, 10)
    }

    const delayTimeout = setTimeout(() => {
      updateCount()
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearTimeout(delayTimeout)
    }
  }, [start, end, duration, delay, isVisible])

  return { count, observerRef }
}

