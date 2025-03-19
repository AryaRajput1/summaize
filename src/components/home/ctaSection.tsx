import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

function CTASection() {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center my-4 bg-gradient-to-r from-transparent via-gray-100 to-transparent py-20">
    <span className="font-bold text-3xl">Ready to Save Hours of Reading Time?</span>
    <h1 className="text-gray-400">
      Transform any lengthy PDF into an easy-to-digest summary with our AI-powered summarizer SummAIze.
    </h1>
    <Button className="text-white rounded-full mt-3 bg-linear-to-r from-gray-900 via-rose-500 to-rose-700 hover:from-rose-700 hover:via-rose-500 hover:to-gray-900 transition-colors duration-300">
        <Link href={'/'} className="flex justify-center items-center gap-2">
        <span>Get Started</span>
        <ArrowRight className="animate-pulse"/>
        </Link>
      </Button>
  </div>
  )
}
export default CTASection