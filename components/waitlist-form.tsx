"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Mail, Download } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }])

      if (error) {
        if (error.code === "23505") {
          setError("You're already on the waitlist!")
        } else {
          setError("Something went wrong. Please try again.")
        }
        return
      }


      // Send welcome email (you'll implement this API route)
      const emailResponse = await fetch('/api/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })

      if (!emailResponse.ok) {
        throw new Error('Failed to send welcome email')
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Unexpected error. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg border border-teal-200/50 dark:border-teal-800/50 shadow-sm">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-800/50 text-teal-600 dark:text-teal-300 mb-4 shadow-sm">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">You're on the list!</h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-4">
          We'll notify you when the course launches. Check your email for your free 14-Day Side Business Launch Plan!
        </p>
        <div className="inline-flex items-center text-teal-600 dark:text-teal-400 font-medium">
          <Download className="h-4 w-4 mr-2" />
          Your PDF is on its way
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {showConfetti && (
        <div className="confetti-container">
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
          <div className="confetti"></div>
        </div>
      )}

      <div className="text-center mb-4">
        <p className="text-slate-700 dark:text-slate-300 font-medium">Sign Up</p>
      </div>

      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          <Mail className="h-5 w-5" />
        </div>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email here to get instant access"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="pl-10 py-6 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-200 text-base"
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>

      <Button
        type="submit"
        className="w-full bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-200 py-6 text-base cta-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg
              className="-ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            Get Instant Access
            <ArrowRight className="ml-2 h-5 w-5" />
          </span>
        )}
      </Button>

      <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}
