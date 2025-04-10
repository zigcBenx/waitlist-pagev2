import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatar?: string
}

export default function TestimonialCard({ quote, name, title, avatar }: TestimonialCardProps) {
  return (
    <Card className="border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-purple-600 dark:text-purple-400 mb-4">
          <Quote className="h-6 w-6" />
        </div>
        <p className="text-slate-600 dark:text-slate-300 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden mr-3">
            {avatar ? (
              <img src={avatar || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm font-bold">
                {name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
