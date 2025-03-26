import { notFound, redirect } from "next/navigation";
import { getSummaryById } from "../../../../../actions/getSummaryById";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FileText } from "lucide-react";
import BgGradient from "@/components/ui/common/bg-gradient";
import Link from "next/link";
import SummaryHeader from "@/components/ui/common/SummaryHeader";
import DownloadButton from "@/components/ui/common/DownloadButton";
import { auth } from "@clerk/nextjs/server";
import SummaryViewer from "@/components/ui/common/SummaryViewer";

async function SummariesPage({ params }) {
  const { userId } = await auth();

  if (!userId) {
    redirect("sign-in");
  }
  const { id } = await params;

  const { data } = await getSummaryById(id);
  if (!data) {
    return notFound();
  }

  return (
    <BgGradient className={""}>
      <SummaryHeader data={data} />
      <h1 className="text-3xl font-bold my-4">
        <span className="bg-linear-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">
          {data.title}
        </span>
      </h1>
      <div className="flex justify-center gap-3 flex-col items-center">
        <div className="flex font-semibold gap-2 items-center justify-center">
          <FileText className="text-rose-600 w-4 h-4" />
          <span className="text-gray-600">Source: {data.file_name}</span>
        </div>
        <div className="flex gap-4 items-center justify-center mt-2">
          <Link
            href={data.original_file_url}
            target="_blank"
            className="text-rose-500 flex gap-2 justify-center items-center"
          >
            <ExternalLink className="text-rose-600 w-4 h-4" />
            View Original
          </Link>
          <DownloadButton
            text={data.summary_text}
            fileName={data.title}
            title={data.title}
            created_at={data.created_at}
          />
        </div>
      </div>
      <div className="w-3xl justify-self-center shadow-xl rounded-xl bg-white p-4 m-8 bg-linear-to-r from-rose-50 to-white">
        <SummaryViewer summary={data.summary_text} />
      </div>
    </BgGradient>
  );
}
export default SummariesPage;
