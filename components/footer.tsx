import Link from "next/link"
import { Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 py-8">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
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

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-slate-500 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-400">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>

          <div className="text-center md:text-right text-slate-500 dark:text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Vibe Coders. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
