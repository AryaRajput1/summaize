import { cn } from "@/lib/utils";

function ProgressBar({
  sections,
  currentSection,
}: {
  sections: {
    title: string;
    points: string[];
  }[];
  currentSection: number;
}) {
  return (
    <div className="flex bg-rose-50/10 backdrop-blur-md border-b p-4 w-full">
      <div className="flex-1 flex justify-center items-center gap-2">
        {sections.map((_, index) => {
          return (
            <div
              className={cn(
                "bg-rose-100 rounded-full h-1.5 w-full transition-colors duration-500 flex-1"
              )}
            >
              <div
                className={cn(
                  "h-full bg-linear-to-r from-rose-900 to-rose-600 rounded-full duration-500 transition-all",
                  currentSection === index
                    ? "w-full"
                    : currentSection > index
                      ? "w-full opacity-10"
                      : "w-0"
                )}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ProgressBar;
