import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import topbarlogo from "../assets/dashboard/topbar.png";

const TotalExpense = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 xl:ml-10 w-full">
        <nav class="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
          <div class="flex flex-col-reverse justify-end gap-6 md:flex-row md:items-center">
            <div class="flex items-center">
              <div class="mr-3">
                <div class="relative w-full  h-10">
                  <img src={topbarlogo} alt="logo" />
                </div>
              </div>

              <Link href="#">
                <button
                  class="middle none font-sans font-bold center uppercase transition-all 
                    disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none 
                    text-xs py-3 rounded-lg text-gray-500  hidden items-center gap-1 px-4 xl:flex
                    border  border-[#0E9FF1]
                    "
                  type="button"
                >
                  <u className="text-[#0E9FF1]">View Report in Table</u>{" "}
                </button>
                <button
                  class="relative middle none font-sans font-medium 
                    text-center uppercase transition-all disabled:opacity-50
                     disabled:shadow-none disabled:pointer-events-none w-10 
                     max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs
                      text-gray-500 bg-[#319795] active:bg-blue-gray-500/30 grid xl:hidden"
                  type="button"
                >
                  Investing planning
                </button>
              </Link>
              <button
                class="relative middle none font-sans font-medium text-center
                   uppercase transition-all disabled:opacity-50 disabled:shadow-none 
                   disabled:pointer-events-none w-36  h-10 
                    rounded-lg text-xs text-white ml-3  bg-[#319795]
                   "
                type="button"
                style={{ whiteSpace: "nowrap" }}
              >
                Investing planning
              </button>
            </div>
          </div>
        </nav>
        {/* Total expense Section here */}
        <div>
          <div className="flex items-center">
            <Link to="/">
              {" "}
              <div className="mr-4 text-5xl">⬅</div>
            </Link>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-2xl">Total expanse </h2>
            <p>
              Click one by one for better understanding and get complete
              information
            </p>
            {/* Topbar button */}
            {/* <div className="mt-10 flex gap-4">
              <button className="bg-[#FD8660] text-white text-center px-5 py-1 rounded-lg">
                Revenue
              </button>
              <button className="bg-[#783DF4] text-white text-center px-5 py-1 rounded-lg">
                Expence Year-wise
              </button>
              <button className="bg-[#FFD600] text-white text-center px-5 py-1 rounded-lg">
                Profit/ Loss
              </button>
            </div> */}

            {/* Left side button */}
            <div className="mt-10 inline:block gap-4">
              <button className="bg-[#FD6060] text-white text-center px-5 py-1 rounded-lg mb-5">
                Sales
              </button>
              <br />
              <button className="bg-[#6CFF38] text-white text-center px-5 py-1 rounded-lg mb-5">
                Marketing
              </button>
              <br />
              <button className="bg-[#1EB9FB] text-white text-center px-5 py-1 rounded-lg mb-5">
                Admin
              </button>
              <br />
              <button className="bg-[#FDBB11] text-white text-center px-5 py-1 rounded-lg mb-5">
                Legal Fees
              </button>
              <br />
              <button className="bg-[#FB2981] text-white text-center px-5 py-1 rounded-lg mb-5">
                Office Space 300 aq ft
              </button>
              <br />
              <button className="bg-[#9D43F8] text-white text-center px-5 py-1 rounded-lg mb-5">
                IT infrastruce
              </button>
              <br />
              <button className="bg-[#05F2E4] text-white text-center px-5 py-1 rounded-lg mb-5">
                Miscellaneous
              </button>
              <br />
              <button className="bg-[#0912FF] text-white text-center px-5 py-1 rounded-lg mb-5">
                Total
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalExpense;
