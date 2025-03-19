import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="flex flex-col mx-auto z-0 items-center justify-center py-16 gap-3">
      <div className="flex">
        <div className="flex relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
          <Badge className="relative px-6 py-2 rounded-full bg-white text-rose-500 group-hover:text-gray-900 group-hover:bg-transparent transition-colors duration-300">
            <Sparkles className="h-8 w-8 mr-2 text-rose-600 animate-pulse" />
            <p>Powered By AI</p>
          </Badge>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl font-semibold">
          Transform PDFs into {" "}
          <span className="relative px-2">
          <span className="absolute inset-0 bg-rose-600/20 -skew-y-5" aria-hidden></span>
          concise</span> summaries
        </h1>
        <h2 className="">
          Get a beautiful summary reel of the document in seconds
        </h2>
      </div>
      <Button className="text-white rounded-full mt-3 bg-linear-to-r from-gray-900 via-rose-500 to-rose-700 hover:from-rose-700 hover:via-rose-500 hover:to-gray-900 transition-colors duration-300">
        <Link href={'/'} className="flex justify-center items-center gap-2">
        <span>Try SummAIze</span>
        <ArrowRight className="animate-pulse"/>
        </Link>
      </Button>
    </section>
  );
}
export default HeroSection;
