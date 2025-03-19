import { ArrowRight, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

function PricingSection() {
  const plans = [
    {
      id: "basic",
      title: "Basic",
      description: "Perfect for occasional use",
      price: "9",
      benefits: [
        "5 PDF summaries per month",
        "Standard processing speed",
        "Email Support",
      ],
      recommended: false,
    },
    {
      id: "pro",
      title: "Pro",
      description: "For professionals and teams",
      price: "19",
      benefits: [
        "Unlimited summaries per month",
        "Priority processing speed",
        "24/7 priority Support",
        "Markdown Export",
      ],
      recommended: true,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center my-4 py-8">
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
              <Button className={
                cn("bg-gradient-to-r from-rose-400 to-rose-500 rounded-4xl", plan.recommended && "from-rose-700 to-rose-400 border border-rose-800")
              }>
                Buy Now <ArrowRight />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default PricingSection;
