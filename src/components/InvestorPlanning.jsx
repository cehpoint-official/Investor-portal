import React, { useState } from "react";
import { Link } from "react-router-dom";
import plussign from "../assets/dashboard/plus sign.png";
import save from "../assets/dashboard/save.png";
import Sidebar from "./Sidebar";
import Table from "./Table";
import ExitSection from "./ExitSection";

const InvestorPlanning = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAdd = () => {
    // Add the data to your storage or perform other actions as needed
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //   Topber here

  const TopBar = () => {
    return (
      <div className="w-full flex justify-between p-4 items-center">
        <div className="flex items-center">
          <div className="mr-4 text-5xl">⬅</div>
        </div>
        <div className="flex items-center">
          <button className="mr-4 btn bg-[#FBBA3B] p-3 text-white">
            View Our Ask
          </button>
          <button className="mr-4 bg-[#36B7FF] p-3 text-white">
            Offer Investment
          </button>
        </div>
      </div>
    );
  };
  //   Investor table here

  return (
    <div className=" flex">
      <Sidebar></Sidebar>
      <div className="w-full">
        <TopBar />
        <div className="text-center  items-center">
          <h2
            className={`cursor-pointer inline-block mr-4 ${
              selectedOption === "investing"
                ? "rounded border-b-4 border-[#319795] text-[#319795] font-bold text-xl p-2"
                : ""
            }`}
            onClick={() => handleOptionClick("investing")}
          >
            Investing Planning
          </h2>
          <h2
            className={`cursor-pointer inline-block ${
              selectedOption === "exit"
                ? "border-b-2 border-[#319795] font-bold text-xl"
                : ""
            }`}
            onClick={() => handleOptionClick("exit")}
          >
            Exit Calculation
          </h2>
        </div>
        {selectedOption === "investing" && <Table />}
        {selectedOption === "exit" && <ExitSection/>}
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default InvestorPlanning;
