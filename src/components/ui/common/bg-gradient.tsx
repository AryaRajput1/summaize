import { cn } from "@/lib/utils";

function BgGradient({ className, children }) {
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40
        -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
      >
        <div
          style={{
            clipPath:
              "polygon (50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          className="relative left-[calc(50 % -11 rem)] aspect-1155/678 w-[36.125 rem] -translate-x-1/2 rotate-[30deg]
bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500
opacity-20 sm: left-[calc(50%-30 rem)] sm: w-[72 rem]"
        />
      </div>
      { children}
    </div>
  );
}
export default BgGradient;
