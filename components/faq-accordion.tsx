"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need any coding experience?",
    answer:
      "No, this course is specifically designed for people with no programming background. We'll teach you the concepts in a way that's accessible and relevant to AI prompting.",
  },
  {
    question: "What will I learn in the free guide?",
    answer:
      "The free guide covers essential programming concepts like data structures, algorithms, and system architecture, explained in a way that's relevant to AI prompters and product builders.",
  },
  {
    question: "How will this help me build better products with AI?",
    answer:
      "Understanding programming concepts will help you create more effective prompts, better understand how AI tools work, and build more robust products by knowing how to structure your requests and data.",
  },
  {
    question: "Is this just about prompt engineering?",
    answer:
      "No, this goes beyond prompt engineering. We focus on the underlying programming concepts that will make you a better AI user and product builder, regardless of which AI tools you use.",
  },
  {
    question: "When will the full course be available?",
    answer:
      "The full course is currently in development. By signing up for the free guide, you'll be the first to know when the course launches and get early-bird pricing.",
  },
  {
    question: "Can I apply these concepts to any AI tool?",
    answer:
      "Yes, the concepts we teach are universal and can be applied to any AI tool or platform, including ChatGPT, Midjourney, DALL-E, and others.",
  },
]

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium text-slate-900 dark:text-white">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 dark:text-slate-300">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
