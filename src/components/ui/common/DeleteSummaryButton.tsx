"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../button";
import { Trash2Icon } from "lucide-react";
import { useState, useTransition } from "react";
import { deleteSummary } from "../../../../actions/deleteSummary";
import { toast } from "sonner";

function DeleteSummaryButton({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pending, startTransition] = useTransition();

  const onDelete = () => {
    startTransition(async () => {
      const { success } = await deleteSummary(id);
      setIsOpen(false);

      if (success) {
        toast.success("Your summary has been deleted.");
      } else {
        toast.error("There is some issue to delete summary. Try again later.");
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <Trash2Icon className="text-gray-600" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete summary?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            summary.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex justify-end gap-2">
            <Button variant={"ghost"} onClick={onDelete} disabled={pending}>
              {!pending ? (
                <Trash2Icon className="text-gray-600" />
              ) : (
                "Deleting..."
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default DeleteSummaryButton;
