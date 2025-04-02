"use client";

import { Card } from "@/components/ui/card";
import ProgressBar from "./ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";
import { useFormStatus } from "react-dom";

function UploadLoadingSkeleton() {
  const { pending } = useFormStatus();

  if (!pending) {
    return null;
  }
  return (
    <Card className="p-4 shadow-xl flex items-center justify-center flex-col w-full mt-8">
      <ProgressBar currentSection={0} sections={[1, 2, 3, 4, 5]} />
      <Skeleton className="h-10 w-[220px]" />
      <Skeleton className="h-10 w-[220px] self-start" />
      <Skeleton className="h-10 w-[100px] self-start" />
      <Skeleton className="h-10 w-[300px] self-start" />
      <hr />
      <div className="w-full flex justify-between items-center">
        <Skeleton className="h-10 w-10 rounded-full bg-rose-100" />
        <Skeleton className="h-2 w-22" />
        <Skeleton className="h-10 w-10 rounded-full bg-rose-100" />
      </div>
    </Card>
  );
}
export default UploadLoadingSkeleton;
