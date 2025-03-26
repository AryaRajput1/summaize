import { FileText } from "lucide-react";
import { Badge } from "../badge";
import NavLink from "./nav-link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

function Header() {
  const isLoggedIn = true;
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex">
        <NavLink
          href={"/"}
          className="flex items-center gap-1 lg:gap-2 shrink-0 text-gray-900"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 transform transition ease-in-out duration-150" />
          <span className="font-extrabold lg:text-xl">SummAIze</span>
        </NavLink>
      </div>
      <div className="flex lg:justify-center lg:items-center gap-4 lg:gap-12">
        {!isLoggedIn ? (
          <NavLink href={"#price"}>Price</NavLink>
        ) : (
          <NavLink href={"/dashboard"}>Your Summaries</NavLink>
        )}
      </div>
      <div className="flex lg:justify-center lg:items-center gap-4 lg:gap-12">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <div className="flex gap-2">
            <NavLink href={"/upload"}>Upload a PDF</NavLink>
            <Badge variant={"secondary"} className="bg-rose-500">
              Pro
            </Badge>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
export default Header;
