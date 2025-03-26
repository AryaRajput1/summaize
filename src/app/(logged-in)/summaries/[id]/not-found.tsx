import BgGradient from "@/components/ui/common/bg-gradient";
import Link from "next/link";

function NotFoundPage() {
  return (
    <BgGradient className={''}>
      <div className="flex justify-center items-center gap-3 mt-10 flex-col">
        <h1 className="font-bold text-5xl">Summary not found.</h1>
        <p className="font-semibold text-sm text-gray-500">
          The summary you are looking for doesn't exists or removed.
        </p>
        <Link
          href="/"
          className="px-4 py-2 rounded-md bg-rose-500 text-white font-bold"
        >
          Return Home
        </Link>
      </div>
    </BgGradient>
  );
}
export default NotFoundPage;
