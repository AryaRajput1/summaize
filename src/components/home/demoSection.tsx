import { Pizza, PizzaIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import SummaryViewer from "../ui/common/SummaryViewer";
import { DEMO_SUMMARY } from "@/utils/const";

function DemoSection() {
  const summary = DEMO_SUMMARY;
  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center my-4">
      <span className="inline-block p-2 border-1 rounded-2xl">
        <PizzaIcon className="w-8 h-8 text-rose-500" />
      </span>
      <h1 className="text-2xl font-bold">
        Watch how SummAIze transforms{" "}
        <span className="text-rose-500">this Next.js course PDF </span> into an
        easy to read summary!
      </h1>
      <SummaryViewer summary={summary} className={'my-10'}/>
    </div>
  );
}
export default DemoSection;
