import { Crown } from "lucide-react";
import Link from "next/link";

function PlanBadge({ planTitle }) {
  return <Link href={'/#price'} className="flex gap-1 items-center justify-center rounded-full border-2 p-1 px-2 text-xs border-amber-600 text-amber-800 font-semibold bg-linear-to-r from-amber-100 to-rose-300">
    <Crown className="w-4 h-4"/>
    {planTitle}</Link>;
}
export default PlanBadge;
