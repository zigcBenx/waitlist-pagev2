"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function LeadMagnetForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate email
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    try {
      // In a real app, you would send this data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
          <CheckCircle className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Thank You!</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-2">Check your email for your free AI money-making guide.</p>
        <p className="text-sm text-teal-600 dark:text-teal-400">
          You've also been added to our course waitlist for exclusive updates!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-slate-300 dark:border-slate-600"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-slate-300 dark:border-slate-600"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Free Money-Making Guide"}
        {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
      </Button>

      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  )
}
