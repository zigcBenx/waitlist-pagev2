import { CheckCircle, Clock, FileText, BarChart } from "lucide-react"
import WaitlistForm from "@/components/waitlist-form"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-teal-100/40 dark:bg-teal-900/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 py-12 md:py-16">
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
          <div className="p-6 md:p-10">
            {/* Header Section */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-300 text-sm font-medium mb-4 border border-teal-200/50 dark:border-teal-800/50 shadow-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                  Coming Soon
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                From Code to{" "}
                <span className="text-teal-600 dark:text-teal-400 relative inline-block pb-1">
                  Profitable Business
                  <span className="absolute bottom-0 left-0 w-full h-1.5 bg-teal-400/30 dark:bg-teal-400/50 rounded-full underline-animation"></span>
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-4">
                Unlock the Secret Side of Success for Full-Time Developers
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                Get our exclusive 14-Day Side Business Launch Plan and learn how to spend just 1 hour a day to create{" "}
                <span className="font-bold relative inline-block">
                  your first $1,000
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-slate-600 dark:bg-slate-300 rounded-full underline-animation"></span>
                </span>
                .
              </p>
            </div>

            {/* Introduction Section */}
            <div className="mb-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-200/70 dark:border-slate-700/50 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Hey Developer,</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                You already write amazing code—but while you focus on coding, others are making money with digital
                products and side gigs. The secret? They're mastering the skills beyond coding: clear communication,
                strategic planning, and smart product launching.
              </p>
              <p className="text-slate-700 dark:text-slate-300 font-medium">
                You have the technical edge. Now, discover how to use your skills to build a profitable side business.
              </p>
            </div>

            {/* What You'll Get Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5 flex items-center">
                <span className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400 mr-3">
                  <CheckCircle className="h-4 w-4" />
                </span>
                What You'll Get
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200/70 dark:border-slate-700/50 benefit-card">
                  <div className="mr-4 mt-1 text-teal-500 dark:text-teal-400">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      A 14-day plan designed specifically for full-time developers
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200/70 dark:border-slate-700/50 benefit-card"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="mr-4 mt-1 text-teal-500 dark:text-teal-400">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Step-by-step daily tasks that take only 1 hour of focused work
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200/70 dark:border-slate-700/50 benefit-card"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="mr-4 mt-1 text-teal-500 dark:text-teal-400">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      A clear roadmap from idea to your first $1,000
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-slate-200/70 dark:border-slate-700/50 benefit-card"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="mr-4 mt-1 text-teal-500 dark:text-teal-400">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Bonus tips on client talks, MVP planning, and smart marketing
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/30 dark:from-teal-900/20 dark:to-slate-800/90 rounded-xl p-6 md:p-8 border border-teal-200/50 dark:border-teal-800/30 shadow-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Join our waitlist now and receive your free bonus PDF:
                </h3>
                <p className="text-teal-600 dark:text-teal-400 font-medium text-lg">
                  The 14-Day Side Business Launch Plan for Full-Time Developers
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-2 italic">
                  (If you saw my LinkedIn post, you know this is the secret blueprint you've been waiting for!)
                </p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400 text-center">
          © {new Date().getFullYear()} From Code to Profitable Business. All rights reserved.
        </p>
      </div>
    </div>
  )
}
