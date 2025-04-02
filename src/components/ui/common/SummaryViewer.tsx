"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import NavigationControls from "./NavigationControls";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionLi, MotionUl } from "./motion-wrapper";
import { MOTION_CONSTANTS } from "@/utils/const";

const parseSection = (section: string) => {
  const [heading, ...contents] = section.split("\n") as [string, ...[string]];
  const title = heading.startsWith("#")
    ? heading.substring(1).trim()
    : heading.trim();
  const points = [];

  let currentPoint = "";

  contents.forEach((content) => {
    const point = content.trim();

    if (point.startsWith("•")) {
      if (currentPoint) points.push(currentPoint.substring(1).trim());
      currentPoint = point.substring(1).trim();
    } else if (!point) {
      if (currentPoint) points.push(currentPoint.trim());
      currentPoint = "";
    } else {
      currentPoint = " " + point;
    }
  });

  if (currentPoint) points.push(currentPoint.trim());

  return {
    title,
    points: points.filter(
      (point) => point && !point.startsWith("#") && !point.startsWith("[Choose")
    ),
  };
};
function SummaryViewer({
  summary,
  className,
}: {
  summary: string;
  className: string;
}) {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = summary
    .split("\n# ")
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection);

  const title = sections[currentSection].title;
  const points = sections[currentSection].points;
  return (
    <Card className={cn("p-4 w-3xl shadow-xl", className)}>
      <ProgressBar currentSection={currentSection} sections={sections} />
      <MotionDiv
        key={currentSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ delay: 0.2, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className="h-88 overflow-y-auto no-scrollbar"
      >
        <h1 className="text-2xl font-bold text-center md:m-8 m-1">{title}</h1>
        <MotionUl
          variants={MOTION_CONSTANTS.contianerVariants}
          initial="hidden"
          animate="visible"
        >
          {points.map((point, index) => (
            <MotionLi
              variants={MOTION_CONSTANTS.itemVariants}
              key={index}
              className="md:p-4 p-2 rounded-md md:m-4 m-2 bg-rose-50 border border-gray-100"
            >
              {point}
            </MotionLi>
          ))}
        </MotionUl>
      </MotionDiv>
      <NavigationControls
        sections={sections}
        currentSection={currentSection}
        onNext={() =>
          setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1))
        }
        onPrev={() => setCurrentSection((prev) => Math.max(prev - 1, 0))}
      />
    </Card>
  );
}
export default SummaryViewer;
