"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

function NavigationControls({ sections, currentSection, onNext, onPrev }) {
  useEffect(() => {
    const eventCallback = (e) => {
      if (e.key === "ArrowRight" && currentSection < sections.length) {
        onNext();
      }

      if (e.key === "ArrowLeft" && currentSection > 0) {
        onPrev();
      }
    };
    document.addEventListener("keyup", eventCallback);

    return () => {
      document.removeEventListener("keyup", eventCallback);
    };
  }, []);
  return (
    <div className="flex bg-rose-50/10 backdrop-blur-md border-t p-4">
      <Button
        onClick={onPrev}
        className="rounded-full bg-rose-500 hover:bg-rose-600 w-12 h-12"
        disabled={currentSection === 0}
      >
        <ChevronLeft />
      </Button>
      <div className="flex-1 flex justify-center items-center gap-2">
        {sections.map((_, index) => {
          return (
            <div
              className={cn(
                "bg-rose-100 rounded-full h-2 w-2 transition-colors duration-500",
                index === currentSection && "bg-rose-500"
              )}
            ></div>
          );
        })}
      </div>
      <Button
        onClick={onNext}
        className="rounded-full bg-rose-500 hover:bg-rose-600 w-12 h-12"
        disabled={currentSection === sections.length - 1}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
export default NavigationControls;
