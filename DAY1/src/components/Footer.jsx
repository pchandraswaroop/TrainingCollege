import React from "react";
import { Crown } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="h-auto  text-white mt-auto">
        <div className="flex justify-between bg-[#273e3d] ">
          <div className="max-w-2xl text-3xl  px-30 py-15">
            Discover the full scale of{" "}
            <span className="border-b-2 border-[#d4f96c] pb-1">Clause</span>{" "}
            capabilities
          </div>
          <div className="flex justify-center items-center gap-5 p-10">
            <button className="bg-[#ffffff] px-6 py-3 rounded-2xl text-[#093511]">
              Get a Demo
            </button>
            <button className="bg-[#e1fb6a] px-6 py-3 rounded-2xl text-[#093511]">
              Start for Free
            </button>
          </div>
        </div>
        <div className="w-full bg-[#111615] text-white font-sans pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 pb-16">
              <div className="md:col-span-2 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#d4f96c] flex items-center justify-center">
                    <span className="text-[11px] font-black text-black">
                      <Crown />
                    </span>
                  </div>
                  <span className="text-xl font-medium tracking-tight">
                    Clause
                  </span>
                </div>

                <div className="space-y-2.5 text-sm text-gray-400">
                  <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <span className="opacity-70">
                      <Mail />
                    </span>{" "}
                    hello@clause.com
                  </p>
                  <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                    <span className="opacity-70">
                      <Phone />
                    </span>{" "}
                    +62 1987 654 321
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-normal text-gray-400 mb-5">
                  Solution
                </h4>
                <ul className="space-y-3.5 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Why Cequence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      OpenAI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Security
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-normal text-gray-400 mb-5">
                  Customers
                </h4>
                <ul className="space-y-3.5 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Procurement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sales
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Legal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Enterprise
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-normal text-gray-400 mb-5">
                  Resources
                </h4>
                <ul className="space-y-3.5 text-sm text-gray-500">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Contact Sales
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <a href="#" className="hover:text-white transition-colors">
                      Changelog
                    </a>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4f96c] shadow-[0_0_8px_#d4f96c]"></span>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Bottom Meta Row (Copyright & Socials) */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-900 pt-8 text-xs text-gray-500 tracking-wide">
              <p>&copy; Copyright 2026 Clause. All rights reserved.</p>

              <div className="flex items-center gap-6 mt-4 sm:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
