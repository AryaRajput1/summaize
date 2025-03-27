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

const parseSection = (section) => {
  const [heading, ...contents] = section.split("\n") as [string, ...[string]];
  const title = heading.startsWith("#")
    ? heading.substring(1).trim()
    : heading.trim();
  const points = [];

  let currentPoint = "";

  contents.forEach((content) => {
    const point = content.trim();

    if (point.startsWith("•") || point.startsWith("•")) {
      if (currentPoint) points.push(currentPoint.substring(1).trim());
      currentPoint = point;
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
    <Card className={cn("p-4 w-3xl", className)}>
      <ProgressBar currentSection={currentSection} sections={sections} />
      <div className="h-88 overflow-y-auto">
        <h1 className="text-3xl font-bold text-center m-4">{title}</h1>
        <ul>
          {points.map((point, index) => (
            <li
              key={index}
              className="p-4 rounded-md m-4 bg-rose-50 border border-gray-100"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
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
