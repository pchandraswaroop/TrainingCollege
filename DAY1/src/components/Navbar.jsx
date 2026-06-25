import React from "react";
import { Crown } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-10 py-2 bg-[#f6f6f4]">
        <div className="flex gap-10">
          <div className="flex gap-1">
            <div className="flex items-center">
              <Crown />
            </div>
            <div className="text-lg py-2 flex font-bold">Clause</div>
          </div>
          <div className="flex gap-7 items-center-safe">
            <div className="text-[#000000]">Solution</div>
            <div className="text-[#000000]">Customer</div>
            <div className="text-[#000000]">Pricing</div>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <button className="bg-[#ffffff] px-5 py-2 rounded-2xl text-[#103e2e]">
            Login
          </button>
          <button className="bg-[#004635] px-5 py-2 rounded-2xl text-[#d1ed7e]">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
