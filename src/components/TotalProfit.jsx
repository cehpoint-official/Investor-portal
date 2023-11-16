import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import topbarlogo from "../assets/dashboard/topbar.png";
import FinancialLineChart from "./FinancialLineChart";
import { FaSearchPlus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";
import TotalSalesTinyLineChart from "./TotalSalesLineChart";
import TotalProfitChart from "./TotalProfitPieChart";
import RadialProgress from "./RadialProgress";
import RadialProgressLossection from "./RadialProgressLossSection";

const TotalProfit = () => {
  const [showProfitButtons, setShowProfitButtons] = useState(false);
  const [showProfitSection, setShowProfitSection] = useState(false);
  const [showLossSection, setShowLossSection] = useState(false);
  const [progress, setProgress] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  const toggleSection = () => {
    setSectionVisible(!sectionVisible);
    // Close the "Profit" and "Sales brokerage" sections
    setShowProfitSection(false);
    setShowLossSection(false);
  };

  const toggleProfit = () => {
    setShowProfitSection(true);
    setShowLossSection(false);
    // Close the "Sales brokerage" section
    setSectionVisible(false);
  };

  const toggleLoss = () => {
    setShowLossSection(true);
    setShowProfitSection(false);
    // Close the "Sales brokerage" section
    setSectionVisible(false);
  };

  const handleClick = () => {
    // Logic to perform when the chart section is clicked
    console.log("Total Profit Chart clicked!");
    // Add navigation logic or any other action here
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-4 xl:ml-10 w-full relative">
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
            <h2 className="font-bold text-2xl">Total Profit </h2>

            {/* Clickable div wrapping the TotalProfitChart */}
            <div
              style={{ cursor: "pointer", marginTop: "5px" }}
              onClick={() => setShowProfitButtons(!showProfitButtons)}
            >
              <TotalProfitChart />
              {showProfitButtons && (
                <div className="absolute top-96 right-72 mt-2  text-black text-center px-2 py-2 rounded-lg space-y-2">
                  <div className="flex">
                    <button
                      onClick={toggleProfit}
                      className="bg-[#5CFF42] text-white text-center px-5 py-1 rounded-lg mr-6 mt-6"
                    ></button>
                    <button
                      onClick={toggleLoss}
                      className="bg-[#F95656] text-white text-center px-3 py-1 rounded-lg"
                    ></button>
                  </div>
                  {showProfitSection && (
                    <RadialProgress showProfitSection={showProfitSection} />
                  )}
                  {showLossSection && <RadialProgressLossection />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalProfit;
