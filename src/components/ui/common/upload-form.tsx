"use client";

import { fileSchema } from "@/schema/fileSchema";
import { Input } from "../input";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import UploadFormButton from "./upload-form-button";
import { generatePDFSummary } from "../../../../actions/generatePDFSummary";
import { savePDFSummary } from "../../../../actions/savePDFSummary";
import { formatFileNameAsTitle } from "@/utils/formatFileNameAsTitle";
import { useRouter } from "next/navigation";
import UploadLoading from "./upload-loading";

function UploadForm() {
  const router = useRouter();
  const { startUpload, routeConfig } = useUploadThing("pdfUploader", {
    onClientUploadComplete: () => {
      toast.success("Hurray! File Uploaded ☺️.");
    },
    onUploadError: (error) => {
      toast.error("Oh No! There is an issue 🥺.");
    },
    onUploadBegin: () => {
      toast("File is being uploading 🚀.");
    },
  });

  const onSubmit = async (formData: FormData) => {
    const file = formData.get("file") as File;

    const result = fileSchema.safeParse({ file });

    if (!result.success) {
      toast.error("Upload a PDF.");
      return;
    }

    const resp = (await startUpload([file])) as unknown as {
      serverData: {
        userId: string;
        file: {
          url: string;
          name: string;
        };
      };
    }[];

    if (!resp) {
      toast.error("Oh No! There is an issue 🥺.");
      return;
    }

    toast("Our AI is reading your document.");
    const { data, message } = await generatePDFSummary(resp);

    if (data) {
      console.log({ data });
      toast.success("Hang Tight! we are saving your summary.");

      const title = formatFileNameAsTitle(file.name);

      try {
        const result = await savePDFSummary({
          file_name: file.name,
          title: title,
          original_file_url: resp[0].serverData.file.url,
          summary_text: data,
        });
        toast.success("Hurray! we have saved your summary.");

        router.push("/dashboard");
      } catch (error) {
        toast.success("Not able to save summary.");
      }
      return;
    }

    toast.error("Oh No! There is an issue 🥺.");
  };
  return (
    <div className="mt-10">
      <form className="flex flex-col" action={onSubmit}>
        <div className="flex gap-2">
          <Input
            type="file"
            name="file"
            id="file"
            className=""
            required
            accept="application/pdf"
          />
          <UploadFormButton />
        </div>
        <UploadLoading />
      </form>
    </div>
  );
}
export default UploadForm;
