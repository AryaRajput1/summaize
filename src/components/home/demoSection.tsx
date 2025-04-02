import { PizzaIcon } from "lucide-react";
import SummaryViewer from "../ui/common/SummaryViewer";
import { DEMO_SUMMARY } from "@/utils/const";
import { MotionDiv, MotionH1, MotionSpan } from "../ui/common/motion-wrapper";

function DemoSection() {
  const summary = DEMO_SUMMARY;
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center my-4 mt-16">
      <MotionSpan
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="inline-block p-2 border-1 rounded-2xl"
      >
        <PizzaIcon className="w-8 h-8 text-rose-500" />
      </MotionSpan>
      <MotionH1
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
        className="text-2xl text-center md:text-3xl font-bold"
      >
        Watch how SummAIze transforms{" "}
        <span className="text-rose-500">this Next.js course PDF </span> into an
        easy to read summary!
      </MotionH1>
      <MotionDiv
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.2 }}
      >
        <SummaryViewer
          summary={summary}
          className={"my-10 w-[400px] md:w-xl lg:w-2xl"}
        />
      </MotionDiv>
    </div>
  );
}
export default DemoSection;
