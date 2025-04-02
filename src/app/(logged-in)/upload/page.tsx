import { Badge } from "@/components/ui/badge";
import BgGradient from "@/components/ui/common/bg-gradient";
import {
  MotionDiv,
  MotionH1,
  MotionH2
} from "@/components/ui/common/motion-wrapper";
import UploadForm from "@/components/ui/common/upload-form";
import { getSubscriptionData } from "@/utils/getSubscription";
import { auth } from "@clerk/nextjs/server";
import { Sparkles } from "lucide-react";
import { redirect } from "next/navigation";

async function page() {
  const { userId } = await auth();
  const { isMaxLimitReached, isActive } = await getSubscriptionData();

  if (!userId) {
    redirect("/sign-in");
  }

  if (!isActive) {
    redirect("/#price");
  }

  if (isMaxLimitReached) {
    redirect("/dashboard");
  }

  return (
    <BgGradient className={""}>
      <section className="flex flex-col mx-auto z-0 items-center justify-center py-16 gap-6">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex"
        >
          <div className="flex relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge className="relative px-6 py-2 rounded-full bg-white text-rose-500 group-hover:text-gray-900 group-hover:bg-transparent transition-colors duration-300">
              <Sparkles className="h-8 w-8 mr-2 text-rose-600 animate-pulse" />
              <p>AI Powered Content Creation</p>
            </Badge>
          </div>
        </MotionDiv>
        <div className="flex flex-col justify-center items-center gap-2">
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-3xl font-semibold"
          >
            Start Uploading{" "}
            <span className="relative px-2">
              <span
                className="absolute inset-0 bg-rose-600/20 -skew-y-5"
                aria-hidden
              ></span>
              Your PDF's
            </span>
          </MotionH1>
          <MotionH2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-gray-600"
          >
            Upload your PDF and let our AI to do the magic! 🔥
          </MotionH2>
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <UploadForm />
        </MotionDiv>
      </section>
    </BgGradient>
  );
}
export default page;
