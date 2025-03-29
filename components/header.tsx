"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=200"
            alt="Global Fintech Summit Logo"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/attend" className="text-sm font-medium hover:text-primary">
            Attend
          </Link>
          <Link href="/sponsor" className="text-sm font-medium hover:text-primary">
            Sponsor
          </Link>
          <Link href="/agenda" className="text-sm font-medium hover:text-primary">
            Agenda
          </Link>
          <Link href="/speakers" className="text-sm font-medium hover:text-primary">
            Speakers
          </Link>
          <Link href="/book-now">
            <Button >
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="/attend"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Attend
            </Link>
            <Link
              href="/sponsor"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsor
            </Link>
            <Link
              href="/agenda"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>
            <Link
              href="/speakers"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link href="/book-now" onClick={() => setIsMenuOpen(false)}>
              <Button>
                Book Now
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

