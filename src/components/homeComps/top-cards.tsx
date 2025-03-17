import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface Props {
  token: {
    id: number;
    name: string;
    symbol: string;
    percentChange: string;
    image: string;
  };
}
const TopCards = ({ token }: Props) => {
  const [loading, setModal] = useState(true);

  return (
    <div className="rounded-2xl bg-brand-grey p-4 flex items-center gap-4">
      <div className=" size-16 rounded-full overflow-clip">
        {loading && <Skeleton className="size-16" />}
        <img
          onLoad={() => setModal(false)}
          src={token.image}
          alt=""
          className="size-full object-cover"
        />
      </div>
      <div className="grid">
        <span className="text-sm">{token.name}</span>
        <span className="text-brand-green text-xs">
          {token.symbol}
          {token.percentChange}
        </span>
      </div>
    </div>
  );
};

export default TopCards;
