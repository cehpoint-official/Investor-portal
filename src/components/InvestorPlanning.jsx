import React, { useState } from "react";
import { Link } from "react-router-dom";
import plussign from "../assets/dashboard/plus sign.png";
import save from "../assets/dashboard/save.png";
import Sidebar from "./Sidebar";
import Table from "./Table";
import ExitSection from "./ExitSection";
import TopBar from "./TopBar";

const InvestorPlanning = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAdd = () => {
    // Add the data to your storage or perform other actions as needed
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  //   Topber here

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
                ? "rounded border-b-4 border-[#319795] text-[#319795] font-bold text-xl p-2"
                : ""
            }`}
            onClick={() => handleOptionClick("exit")}
          >
            Exit Calculation
          </h2>
        </div>
        {selectedOption === "investing" && <Table />}
        {selectedOption === "exit" && <ExitSection />}
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default InvestorPlanning;
