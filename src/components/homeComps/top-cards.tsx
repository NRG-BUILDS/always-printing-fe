import { Skeleton } from "../ui/skeleton";

const TopCards = () => {
  return (
    <div className="rounded-2xl bg-brand-grey p-4 flex items-center gap-4">
      <div className=" size-16 rounded-full overflow-clip">
        <Skeleton className="size-16" />
      </div>
      <div className="grid">
        <span className="text-sm">Ghost (GHST)</span>
        <span className="text-brand-green text-xs">+940.5%</span>
      </div>
    </div>
  );
};

export default TopCards;
