import { CreateCoinModal } from "@/components/homeComps/create-coin-modal.";
import { useState } from "react";

interface Props {}

const Banner = ({}: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="p-[1px] gradient rounded-2xl">
      <section className="bg-gradient-to-l from-[#0C4732] to-black  p-4 md:p-3.5 md:px-10 rounded-2xl flex flex-col-reverse gap-5 md:flex-row items-start md:items-center text-white">
        <div className="flex gap-2 lg:gap-5">
          <button className="px-4 lg:px-7 py-3 font-semibold gradient text-black rounded-full">
            Mint Token
          </button>
          <div className="gradient p-[2px] rounded-full overflow-clip bg-clip-border">
            <button
              onClick={() => setModal(!modal)}
              className="px-4 lg:px-7 bg-black text-white py-3 font-semibold rounded-full"
            >
              Create New Coin
            </button>
          </div>
        </div>
        <div>
          <h4 className="text-lg">$AP is here to change the game.</h4>
          <p className="text-xs">
            Buy, hold, and earn airdrops every five minutes.
          </p>
        </div>
      </section>
      <CreateCoinModal open={modal} setModal={setModal} />
    </div>
  );
};

export default Banner;
