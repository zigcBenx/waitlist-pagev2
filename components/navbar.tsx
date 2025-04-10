"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="bg-teal-600 text-white p-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </span>
              <span className="font-bold text-xl text-slate-900 dark:text-white">Vibe Coders</span>
            </Link>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          ) : (
            <nav className="flex items-center space-x-6">
              <Link
                href="#features"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Features
              </Link>
              <Link
                href="#about"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                FAQ
              </Link>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get Free Money-Making Guide</Button>
            </nav>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white dark:bg-slate-900 z-40 p-4">
          <nav className="flex flex-col space-y-4 pt-4">
            <Link
              href="#features"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-lg py-2 border-b border-slate-100 dark:border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-lg py-2 border-b border-slate-100 dark:border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-lg py-2 border-b border-slate-100 dark:border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white text-lg py-2 border-b border-slate-100 dark:border-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button
              className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Money-Making Guide
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
