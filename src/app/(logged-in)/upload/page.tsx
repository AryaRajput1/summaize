import { Badge } from "@/components/ui/badge";
import BgGradient from "@/components/ui/common/bg-gradient";
import UploadForm from "@/components/ui/common/upload-form";
import { Sparkles } from "lucide-react";

function page() {
  return (
    <BgGradient>
      <section className="flex flex-col mx-auto z-0 items-center justify-center py-16 gap-6">
        <div className="flex">
          <div className="flex relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge className="relative px-6 py-2 rounded-full bg-white text-rose-500 group-hover:text-gray-900 group-hover:bg-transparent transition-colors duration-300">
              <Sparkles className="h-8 w-8 mr-2 text-rose-600 animate-pulse" />
              <p>AI Powered Content Creation</p>
            </Badge>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-semibold">
            Start Uploading{" "}
            <span className="relative px-2">
              <span
                className="absolute inset-0 bg-rose-600/20 -skew-y-5"
                aria-hidden
              ></span>
              Your PDF's
            </span>
          </h1>
          <h2 className="text-gray-600">
            Upload your PDF and let our AI to do the magic! 🔥
          </h2>
        </div>
        <UploadForm/>
      </section>
    </BgGradient>
  );
}
export default page;
