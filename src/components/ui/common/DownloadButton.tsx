"use client";

import { Download } from "lucide-react";
import { Button } from "../button";
import { format } from "date-fns";

function DownloadButton({ text, fileName, created_at, title }) {
  const downloadTextFile = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button
      onClick={downloadTextFile}
      className="bg-rose-100 text-rose-500 hover:bg-rose-200"
    >
      <Download /> Download Summary
    </Button>
  );
}
export default DownloadButton;
