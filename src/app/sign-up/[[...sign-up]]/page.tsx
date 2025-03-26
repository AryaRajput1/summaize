import BgGradient from "@/components/ui/common/bg-gradient";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-10">
      <BgGradient className={""}>
        <SignUp />
      </BgGradient>
    </div>
  );
}
