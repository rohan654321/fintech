import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Global Fintech Summit</h3>
            <p className="mb-4 text-gray-400">
              Africa's Premier Banking & Fintech Summit
              <br />
              10 – 11 July 2025, Johannesburg, South Africa
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/attend" className="hover:text-white">
                  Attend
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="hover:text-white">
                  Sponsor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/agenda" className="hover:text-white">
                  Agenda
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-white">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/book-now" className="hover:text-white">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            <div className="flex space-x-4 text-gray-400">
              <Link href="#" className="hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="mt-4 text-gray-400">
              Email: info@globalfintechsummit.com
              <br />
              Phone: +27 123 456 789
            </p>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-gray-800 text-gray-400 text-sm">
          <p>© 2025 Global Fintech Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

