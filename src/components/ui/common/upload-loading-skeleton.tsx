"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";
import NavigationControls from "./NavigationControls";
import ProgressBar from "./ProgressBar";
import { cn } from "@/lib/utils";
import { MotionDiv, MotionLi, MotionUl } from "./motion-wrapper";
import { MOTION_CONSTANTS } from "@/utils/const";
import { Skeleton } from "@/components/ui/skeleton";

function UploadLoadingSkeleton() {
  return <div className="text-center mt-4">
    Uploading...
  </div>
}
export default UploadLoadingSkeleton;
