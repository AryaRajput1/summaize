import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getSubscriptionData } from "@/utils/getSubscription";
import PlanBadge from "./PlanBadge";

async function Header() {
  const { userId } = await auth();

  const { isActive, planTitle } = await getSubscriptionData()

  return (
    <nav className="flex items-center justify-between py-4 flex-col md:flex-row gap-2">
      <div className="flex">
        <NavLink
          href={"/"}
          className="flex items-center gap-1 lg:gap-2 shrink-0 text-gray-900"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 transform transition ease-in-out duration-150" />
          <span className="font-extrabold lg:text-xl text-3xl">SummAIze</span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center lg:items-center gap-4 lg:gap-12">
        {!userId ? (
          <NavLink href={"#price"} className="h-full text-center">Price</NavLink>
        ) : (
          <NavLink href={"/dashboard"} className="h-full text-center">Your Summaries</NavLink>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 lg:gap-12">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-2 justify-center items-center">
            {userId && isActive && <NavLink href={"/upload"}>Upload a PDF</NavLink>}
            <PlanBadge planTitle={planTitle}/>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Header;
