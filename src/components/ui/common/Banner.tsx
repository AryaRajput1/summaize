import { cn } from "@/lib/utils";

function Banner({ children, type, className }: { children: React.ReactNode, type: 'error', className:string }) {
  return <div className={
    cn(
        'py-2 px-4 rounded-sm',
        type==='error' && 'border-2 border-rose-200 text-rose-600 bg-rose-100',
        className
    )
  }>{children}</div>;
}
export default Banner;
