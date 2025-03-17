import React, { useState } from "react";
import { LucideSearch } from "lucide-react";
import { SidebarTrigger } from "./ui/sidebar";

interface HeaderProps {
  balance?: number;
  currency?: string;
}

const Header: React.FC<HeaderProps> = ({ balance = 6, currency = "SOL" }) => {
  const [walletId, _] = useState("83849384");
  const [tokenName, __] = useState("KIMO");

  return (
    <header className="bg-black text-white pt-0 pb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="lg:hidden text-xl" />
        {/* Left side - Search Bar */}
        <div className="relative flex-grow max-w-lg">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LucideSearch className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Search name, symbol or address..."
              className="bg-gray-900 text-gray-300 w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Right side - User Info */}
      <div className="flex items-center space-x-4 ml-8">
        <button className="hidden sm:block text-green-700 text-sm font-medium">
          BUY
        </button>

        <div className="hidden sm:flex items-center space-x-1 text-sm">
          <span className="text-gray-300">{walletId}</span>
          <span>{tokenName}</span>
          <span className="text-gray-400">for</span>
          <span>
            {balance} {currency}
          </span>
        </div>

        <div className="bg-brand-green font-poppins text-white text-xs px-2 py-1.5 rounded-sm flex items-center justify-center">
          <span>wie8urhn</span>
        </div>

        <div className="h-8 w-8 bg-gray-800 rounded-full overflow-hidden">
          <img
            src="https://i.pravatar.cc/40"
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
