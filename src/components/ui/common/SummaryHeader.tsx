import { Calendar, ChevronLeft, Clock, Sparkles } from "lucide-react";
import { Badge } from "../badge";
import Link from "next/link";
import { format } from "date-fns";
import { MotionDiv } from "./motion-wrapper";

function SummaryHeader({ data }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
      }}
      className="flex justify-between my-8 flex-col-reverse md:flex-row items-center gap-4"
    >
      <div className="flex gap-1 md:gap-2 items-center">
        <span className="bg-white text-rose-500 shadow-xs w-40 flex gap-1 p-2 rounded-full items-center justify-center">
          <Sparkles className="w-4 h-4" />
          AI Summary
        </span>
        <Badge className="bg-transparent text-gray-600">
          <Calendar className="text-rose-500" />
          {format(data.created_at, "PPP")}
        </Badge>
        <Badge className="bg-transparent text-gray-600">
          <Clock className="text-rose-500" />
          {Math.ceil(data.summary_text.length / 200)} min read
        </Badge>
      </div>
      <div>
        <Link
          href="/dashboard"
          className="flex bg-rose-100 rounded-full px-4 py-2"
        >
          <ChevronLeft className="text-rose-500" /> Go to Dashboard
        </Link>
      </div>
    </MotionDiv>
  );
}
export default SummaryHeader;
