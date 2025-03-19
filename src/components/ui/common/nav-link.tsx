"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  const pathname = usePathname();

  const isActive = pathname.endsWith(href) && pathname !== '/';

  return (
    <Link
      href={href}
      className={cn(
        className,
        "transition-colors text-sm duration-200 text-gray-600 hover:text-rose-500",
        isActive && 'text-red-500'
      )}
    >
      {children}
    </Link>
  );
}
export default NavLink;
