import Banner from "@/components/ui/common/Banner";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/ui/common/motion-wrapper";
import SummaryCard from "@/components/ui/common/SummaryCard";
import { MOTION_CONSTANTS } from "@/utils/const";
import { getDbConnection } from "@/utils/db";
import { getSubscriptionData } from "@/utils/getSubscription";
import { auth } from "@clerk/nextjs/server";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const sql = await getDbConnection();

  const { isMaxLimitReached, isActive } = await getSubscriptionData();

  const summaries =
    (await sql`SELECT * FROM pdf_summaries WHERE user_id= ${userId}`) as {
      status: "completed";
      title: string;
      created_at: string;
      id: string;
      summary_text: string;
    }[];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col -gap-1 mb-4">
          <MotionH1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
            }}
            className="md:text-3xl text-2xl font-bold mt-10"
          >
            Your Summaries
          </MotionH1>
          <MotionP
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            className="text-xs md:text-sm font-semibold text-gray-500 my-2"
          >
            Transform your pdfs into concise, actionable insights.
          </MotionP>
        </div>
        {!isMaxLimitReached && (
          <MotionDiv
            variants={MOTION_CONSTANTS.itemVariants}
            whileHover={MOTION_CONSTANTS.buttonVariants}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
            }}
            className="bg-rose-500 hover:bg-rose-700 font-bold rounded-full py-2 px-4 text-white"
          >
            <Link
              href={"/upload"}
              className="flex justify-center items-center md:gap-2 gap-1 text-xs md:text-sm"
            >
              <PlusIcon className="w-4 h-4" /> <span className="hidden md:block">New Summary</span>
            </Link>
          </MotionDiv>
        )}
      </div>
      {isMaxLimitReached && (
        <MotionDiv
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -10 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
          }}
        >
          <Banner type="error" className="my-8">
            You've reached your maximum limit (5 Pdf Uploads) as per your basic
            plan.{" "}
            <Link href="/upgrade" className="underline">
              Click here to upgrade to Pro.
            </Link>
          </Banner>
        </MotionDiv>
      )}
      {summaries.length ? (
        <MotionDiv
          variants={MOTION_CONSTANTS.contianerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {summaries.map((summary, index) => (
            <MotionDiv key={index} variants={MOTION_CONSTANTS.itemVariants}>
              <SummaryCard {...summary} />
            </MotionDiv>
          ))}
        </MotionDiv>
      ) : (
        <div className="text-sm text-gray-500 my-2">
          No Summaries. Try to add new Summary.
        </div>
      )}
    </div>
  );
}
export default DashboardPage;
