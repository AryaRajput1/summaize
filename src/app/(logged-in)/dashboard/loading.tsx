import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col -gap-1 mb-4 items-center md:items-start">
          <Skeleton className="h-10 w-[220px] md:text-3xl text-2xl font-bold mt-10" />
          <Skeleton className="h-6 w-[300px] text-xs md:text-sm font-semibold text-gray-500 my-2" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-[250px] w-[250px] " />
            <Skeleton className="h-[250px] w-[250px] " />
          </div>
        </div>
      </div>
    </div>
  );
}
export default loading;
