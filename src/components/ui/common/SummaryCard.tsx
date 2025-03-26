import {
  Card
} from "@/components/ui/card";
import { FileText, Trash2Icon } from "lucide-react";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { formatDistanceToNow } from 'date-fns'
import DeleteSummaryButton from "./DeleteSummaryButton";

const Badge = ({ status } : { status: 'completed'}) => {
  return (
    <span
      className={cn(
        "rounded-md px-3 py-1 text-sm self-start",
        status === "completed"
          ? "bg-green-200 border border-green-300 text-green-600"
          : "bg-yellow-200 border border-yellow-300 text-yellow-600"
      )}
    >
      {status}
    </span>
  );
};

interface PropTypes {
  status: "completed";
  title: string;
  created_at: string;
  id: string;
  summary_text: string;
}

function SummaryCard({
  status,
  title,
  created_at,
  id,
  summary_text,
}: PropTypes) {
    const time = formatDistanceToNow(new Date(created_at),)
  return (
    <div>
      <Card className="p-3 h-full">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 justify-center items-center">
            <FileText className="h-12 w-12 text-rose-500" />
            <div>
              <h1 className="font-bold text-sm">{title}</h1>
              <p className="text-xs text-gray-500">{time}</p>
            </div>
          </div>
          <DeleteSummaryButton id={id}/>
        </div>
        <Link href={`summaries/${id}`} className="flex flex-col gap-4">
          <p className="text-gray-600 line-clamp-2 text-sm">{summary_text}</p>
          <Badge status={status} />
        </Link>
      </Card>
    </div>
  );
}
export default SummaryCard;
