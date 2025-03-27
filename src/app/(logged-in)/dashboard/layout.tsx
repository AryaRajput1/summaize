import BgGradient from "@/components/ui/common/bg-gradient";
import { getSubscriptionData } from "@/utils/getSubscription";
import { Sparkles } from "lucide-react";
import Link from "next/link";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isActive } = await getSubscriptionData();

  if (!isActive) {
    return (
      <BgGradient className="flex justify-center items-center flex-col my-10 gap-6">
        <span className="uppercase text-rose-500 flex gap-2">
          <Sparkles /> <span>Premium Feature</span>
        </span>
        <h1 className="font-semibold text-3xl">Subscription Required</h1>
        <div className="border-2 py-8 px-4 border-dotted rounded-md border-rose-500 text-md text-gray-800">
          You need to upgrade to the Basic Plan or Pro Plan to access this
          feature.
        </div>
        <Link href={'/#price'} className="bg-linear-to-r from-rose-400 to-rose-700 p-2 rounded-full text-white px-4 font-semibold">View Pricing Plan</Link>
      </BgGradient>
    );
  }

  return <div>{children}</div>;
}
export default DashboardLayout;
