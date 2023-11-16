import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import topbarlogo from "../assets/dashboard/topbar.png";
import FinancialLineChart from "./FinancialLineChart";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";

const Financial = () => {
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
        {/* Revenuse Section here */}
        <div>
          <div className="flex items-center">
            <Link to="/">
              {" "}
              <div className="mr-4 text-5xl">⬅</div>
            </Link>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-2xl">
              User Acquisition Progression{" "}
            </h2>
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
            <div className="flex mt-10">
              <div className="">
                <button
                  className="text-black p-1 mt-4 rounded mr-5"
                  style={{ backgroundColor: "rgba(217, 217, 217, 0.53)" }}
                >
                  2022-12-15
                </button>
                <span className="mr-5">TO</span>
                <button
                  className="text-black p-1 mt-4 rounded"
                  style={{ backgroundColor: "rgba(217, 217, 217, 0.53)" }}
                >
                  2023-10-15
                </button>
              </div>
              <button
                className="text-black p-1 mt-4 rounded ml-96"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.53)" }}
              >
                <div className="flex justify-center items-center">
                  <span className="ml-2 mr-5">90%</span>
                  <span className="ml-2">
                    <FaSearchPlus />
                  </span>
                  <span className="ml-2">
                    <FaSearchMinus />
                  </span>
                  <span className="ml-6 mr-2">Reset</span>
                </div>
              </button>
            </div>
            <FinancialLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
