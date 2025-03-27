import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PLANS as plans } from "@/utils/const";

function PricingSection() {
  
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center my-4 py-8" id='price'>
      <span className="font-bold uppercase text-rose-500">Pricing</span>
      <div className="py-12 flex flex-col lg:flex-row gap-6">
        {plans.map((plan, index) => {
          return (
            <div
              className={cn(
                "relative flex flex-col justify-between gap-8 border border-gray-400/40 rounded-xl p-4 px-6 hover:scale-105 transition duration-300"
              , plan.recommended && 'border-2 border-rose-500'
              )}
            >
              <div>
                {" "}
                <p className="font-bold">{plan.title}</p>
                <p className="text-sm">{plan.description}</p>
              </div>
              <div className="flex gap-1 items-end">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-xs flex flex-col">
                  <span className="font-semibold">USD</span>
                  <span className="">/month</span>
                </span>
              </div>
              <ul>
                {plan.benefits.map((benefit) => {
                  return (
                    <li className="flex gap-2 text-sm">
                      <CheckIcon />
                      {benefit}
                    </li>
                  );
                })}
              </ul>
              <Link href={plan.link} className={
                cn("bg-gradient-to-r from-rose-400 to-rose-500 rounded-4xl flex items-center justify-center p-2 text-white gap-2 font-bold", plan.recommended && "from-rose-700 to-rose-400 border border-rose-800")
              }>
                Buy Now <ArrowRight />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PricingSection;
