import BgGradient from "@/components/ui/common/bg-gradient";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center w-full h-full mt-10">
      <BgGradient className={""} >
      <SignIn />
      </BgGradient>
    </div>
  );
}
