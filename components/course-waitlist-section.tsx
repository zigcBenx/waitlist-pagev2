"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Star, Zap, CheckCircle, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CourseWaitlistSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setTimeout(() => setOpen(false), 3000)
    } catch (err) {
      // Handle error
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container px-4 mx-auto max-w-6xl relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-2">
              <Calendar className="h-4 w-4 mr-2" /> Coming Soon
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              The Complete <span className="text-teal-600 dark:text-teal-400">AI Product Builder</span> Course
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300">
              Take your AI product skills to the next level with our comprehensive course. Learn advanced techniques to
              build, launch, and scale profitable AI products without coding.
            </p>

            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">Step-by-step system to build AI products that sell</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Advanced AI prompting techniques for professional results
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 dark:text-slate-300">
                  Marketing and sales strategies to find your first 100 customers
                </p>
              </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join the Course Waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to know when our premium course launches and get exclusive early-bird pricing.
                  </DialogDescription>
                </DialogHeader>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 mb-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      We'll notify you when the course launches. Get ready to build profitable AI products!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        id="waitlist-email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-200 dark:border-slate-700">
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                PREMIUM
              </div>

              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Course Highlights</h3>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3 text-teal-600 dark:text-teal-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">8-Week Program</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Comprehensive curriculum with weekly modules
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3 text-teal-600 dark:text-teal-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Live Coaching Calls</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Get your questions answered in real-time
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3 text-teal-600 dark:text-teal-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Private Community</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Network with other AI product builders</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3 text-teal-600 dark:text-teal-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Done-For-You Templates</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Plug-and-play prompts and product frameworks
                    </p>
                  </div>
                </li>
              </ul>

              <div className="text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-bold">Early bird pricing available</span> for waitlist members
                </p>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-teal-200 dark:border-teal-800 hover:bg-teal-50 dark:hover:bg-teal-900/20"
                    >
                      Reserve Your Spot
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
