import {Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react"
import { Badge } from "../badge"
import Link from "next/link"
import { format } from "date-fns"

function SummaryHeader({ data }) {
  return (
    <div className="flex justify-between my-8">
    <div className="flex gap-2 ">
        <Badge className="bg-white text-rose-500 shadow-xs px-2">
            <Sparkles/>
            AI Summary
        </Badge>
        <Badge className="bg-transparent text-gray-600">
            <Calendar className="text-rose-500"/>
            { format(data.created_at, 'PPP')}
        </Badge>
        <Badge className="bg-transparent text-gray-600">
            <Clock className="text-rose-500"/>
            {Math.ceil(data.summary_text.length/200)} min read
        </Badge>
    </div>
    <div>
        <Link href='/dashboard' className="flex bg-rose-100 rounded-full px-4 py-2"><ChevronLeft className="text-rose-500"/> Back to Dashboard</Link>

    </div>
</div>
  )
}
export default SummaryHeader