import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import topbarlogo from "../assets/dashboard/topbar.png";
import RadialProgress from "./RadialProgress";
import RadialProgressLossection from "./RadialProgressLossSection";
import RevenuePieChart from "./RevenuePieChart";

const RevenueProjections = () => {
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
            <h2 className="font-bold text-2xl">Revenue Projections </h2>
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
                Expense Year-wise
              </button>
              <div className="relative">
                <button
                  className="bg-[#FFD600] text-white text-center px-5 py-1 rounded-lg"
                  onClick={() => setShowProfitButtons(!showProfitButtons)}
                >
                  Profit/ Loss
                </button>
                {showProfitButtons && (
                  <div
                    className="absolute right-0 left-10 mt-2 bg-white text-black text-center px-2 py-2 
                  rounded-lg space-y-2 "
                  >
                    <div className="flex">
                      <button
                        onClick={toggleProfit}
                        className="bg-[#0FDF49] text-white text-center px-5 py-1 rounded-lg mr-6"
                      >
                        Profit
                      </button>
                      <button
                        onClick={toggleLoss}
                        className="bg-[#FF3D3D] text-white text-center px-6 py-1 rounded-lg"
                      >
                        Loss
                      </button>
                    </div>
                    {/* Profit section */}
            {/* <RadialProgress showProfitSection={showProfitSection} />
                    {/* loss section  */}
            {/* <RadialProgressLossection */}
            {/* showLossSection={showLossSection} */}
            {/* /> */}
            {/* </div> */}
            {/* )} */}
            {/* </div>
            </div>   */}

            {/* Left side button */}
            <div className="flex">
              <div className="mt-10 inline:block gap-4">
                <button
                  onClick={toggleSection}
                  className="bg-[#FD6060] text-white text-center px-5 py-1 rounded-lg mb-5"
                >
                  Sales brokerage
                </button>
                <br />
                <button className="bg-[#783DF4] text-white text-center px-5 py-1 rounded-lg mb-5">
                  Logistic
                </button>
                <br />
                <button className="bg-[#FFD600] text-white text-center px-5 py-1 rounded-lg mb-5">
                  Fintech
                </button>
                <br />
                <button className="bg-[#00B1D8] text-white text-center px-5 py-1 rounded-lg">
                  Subscription
                </button>
              </div>
              {sectionVisible && (
                <div className="ml-10 mt-10">
                  {/* Render your RevenuePieChart component here */}
                  <RevenuePieChart sectionVisible={sectionVisible} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueProjections;
