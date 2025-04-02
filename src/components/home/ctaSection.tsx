import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { MotionDiv, MotionH1, MotionSpan } from "../ui/common/motion-wrapper";
import { MOTION_CONSTANTS } from "@/utils/const";

function CTASection() {
  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center my-4 bg-gradient-to-r from-transparent via-gray-100 to-transparent py-20">
      <MotionSpan
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="font-bold text-3xl text-center"
      >
        Ready to Save Hours of Reading Time?
      </MotionSpan>
      <MotionH1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="text-gray-400 text-center"
      >
        Transform any lengthy PDF into an easy-to-digest summary with our
        AI-powered summarizer SummAIze.
      </MotionH1>
      <MotionDiv
        variants={MOTION_CONSTANTS.itemVariants}
        whileHover={MOTION_CONSTANTS.buttonVariants}
      >
        <Button className="text-white rounded-full mt-3 bg-linear-to-r from-gray-900 via-rose-500 to-rose-700 hover:from-rose-700 hover:via-rose-500 hover:to-gray-900 transition-colors duration-300">
          <Link href={"/"} className="flex justify-center items-center gap-2">
            <span>Get Started</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </MotionDiv>
    </div>
  );
}
export default CTASection;
