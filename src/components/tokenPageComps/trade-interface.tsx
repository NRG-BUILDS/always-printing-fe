import { useState } from "react";

const TradingInterface = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [activeTab, setActiveTab] = useState("buy");
  const [bondingProgress, __] = useState(0);
  const [hillProgress, _] = useState(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(e.target.value));
  };

  return (
    <div className="flex flex-col text-white p-4 rounded-lg">
      {/* User Profile */}
      <div className="flex gap-3 items-center mb-4">
        <div className="relative">
          <img
            src="/api/placeholder/40/40"
            alt="User avatar"
            className="size-14 rounded-full border-2 border-emerald-500"
          />
        </div>
        <div>
          <div className="bg-brand-green text-xs font-poppins py-0.5 px-2 w-fit rounded font-semibold">
            wie8urhn
          </div>
          <span className=" text-sm text-gray-300">Tyler Durden</span>
        </div>
      </div>

      {/* Buy/Sell Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button
          className={`py-2 rounded-md ${
            activeTab === "buy" ? "bg-emerald-500 text-black" : "bg-[#14251F]"
          }`}
          onClick={() => setActiveTab("buy")}
        >
          Buy
        </button>
        <button
          className={`py-2 rounded-md ${
            activeTab === "sell" ? "bg-emerald-500 text-black" : "bg-[#14251F]"
          }`}
          onClick={() => setActiveTab("sell")}
        >
          Sell
        </button>
      </div>

      {/* Additional Info */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-[#14251F] rounded-full p-1.5 text-xs text-center text-gray-400">
          Switch to quack
        </div>
        <div className="bg-[#14251F] rounded-full p-1.5 text-xs text-center text-gray-400">
          Set max slippage
        </div>
      </div>

      {/* Balance */}
      <div className="mb-4">
        <div className="text-gray-300 text-sm mb-1">Balance :</div>
        <div className="flex justify-between">
          <span>0.001</span>
          <span>0.00013SOL</span>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-4">
        <div className="flex gap-1 mb-2 text-[10px]">
          <button className="bg-[#14251F] rounded-full p-1.5 px-3">
            Reset
          </button>
          <button className="bg-[#14251F] rounded-full p-1.5 px-3">0.1%</button>
          <button className="bg-[#14251F] rounded-full p-1.5 px-3">0.5%</button>
          <button className="bg-[#14251F] rounded-full p-1.5 px-3">1%</button>
          <button className="bg-[#14251F] rounded-full p-1.5 px-3">MAX</button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Place Trade Button */}
      <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium mb-4">
        Place Trade
      </button>

      {/* Token Info */}
      <div className="bg-[#14251F] rounded-lg p-3 mb-4">
        <div className="flex items-center mb-2">
          <img
            src="/api/placeholder/40/40"
            alt="Token logo"
            className="w-10 h-10 rounded-lg mr-2"
          />
          <div>
            <div className="font-semibold">Quakers</div>
            <div className="text-xs text-gray-400">quack quack quack</div>
          </div>
        </div>

        {/* Bonding Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Bonding curve progress: 0%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full"
              style={{ width: `${bondingProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-xs text-gray-400 mb-3">
          Gradually the coin is exiting at $0 market cap, there is 0SOL in the
          bonding curve
        </div>

        {/* Hill Progress */}
        <div className="mb-3">
          <div className="flex justify-between text-xs mb-1">
            <span>Exit of the hill progress: 0%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full"
              style={{ width: `${hillProgress}%` }}
            ></div>
          </div>
        </div>

        <div className="text-xs text-gray-400 mb-3">
          Determine the current king at $94,784 market cap
        </div>

        {/* Watchlist Buttons */}
        <div className="flex flex-col space-y-2">
          <button className="flex items-center text-white bg-gray-700 rounded-md p-2 text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            Add to Watchlist
          </button>
          <button className="flex items-center text-white bg-gray-700 rounded-md p-2 text-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Add to Watchlist
          </button>
        </div>
      </div>

      {/* Holder Distribution */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold">Holder distribution</span>
          <span className="text-xs text-blue-400">generate bubble map</span>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>1. KrytalZ (bonding curve)</span>
            <span>100.00%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>1. OTUzyS (bonding curve)</span>
            <span>100.00%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingInterface;
