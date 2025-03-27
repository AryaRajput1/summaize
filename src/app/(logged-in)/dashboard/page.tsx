import { Button } from "@/components/ui/button";
import Banner from "@/components/ui/common/Banner";
import SummaryCard from "@/components/ui/common/SummaryCard";
import { getDbConnection } from "@/utils/db";
import { getSubscriptionData } from "@/utils/getSubscription";
import { auth } from "@clerk/nextjs/server";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "sonner";

async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const sql = await getDbConnection();

  const { isMaxLimitReached, isActive } = await getSubscriptionData()

  const summaries =
    await sql`SELECT * FROM pdf_summaries WHERE user_id= ${userId}`;

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mt-10">Your Summaries</h1>
          <p className="text-sm font-semibold text-gray-500 my-2">
            Transform your pdfs into concise, actionable insights.
          </p>
        </div>
        { !isMaxLimitReached && <Button className="bg-rose-500 hover:bg-rose-700 font-bold">
          <Link
            href={"/upload"}
            className="flex justify-center items-center gap-2"
          >
            <PlusIcon /> New Summary
          </Link>
        </Button>
        }
      </div>
      {isMaxLimitReached && <Banner type="error" className="my-8">
        You've reached your maximum limit (5 Pdf Uploads) as per your basic
        plan.{" "}
        <Link href="/upgrade" className="underline">
          Click here to upgrade to Pro.
        </Link>
      </Banner>}
      {summaries.length ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {summaries.map((summary) => (
            <SummaryCard {...summary} />
          ))}
        </div>
      ) : (
        <div className="text-sm text-gray-500 my-2">
          No Summaries. Try to add new Summary.
        </div>
      )}
    </div>
  );
}
export default DashboardPage;
