import React, { useState } from "react";
import Sidebar from "./Sidebar";

const SavedInvestment = () => {
  const [salesData, setSalesData] = useState("");
  const [price, setPrice] = useState("");
  const handleReset = () => {
    setSalesData("");
    setPrice("");
  };

  const handleCalculateTime = () => {
    // Perform time calculation
  };
  return (
    <div className="flex">
      <Sidebar />
      <div>
        {/* Top bar for investment */}
        <div className="w-full flex justify-between p-4 items-center">
          <div className="flex items-center">
            <div className="mr-4 text-2xl">
              <span className="text-3xl">⬅</span>{" "}
              <span className="ml-16">Offer Investment</span>
            </div>
          </div>
          <div className="flex items-center   mt-3">
            <button className="mr-4 btn bg-[#36B7FF]  py-1 px-3 text-white">
              Create a Own Plans
            </button>
          </div>
        </div>

        <div className=" p-16 items-center justify-center mt-3 mb-16 ml-48">
          {/* <h2 className="text-2xl font-bold mb-20">Exit Calculation</h2> */}

          <table className="mx-auto rounded p-16 bg-[#EEFEFE] h-auto">
            <tbody>
              <br />
              <tr>
                <th
                  className="text-center text-gray-500  font-normal mt-6   "
                  colSpan="2"
                  style={{ marginBottom: "32px" }} // Add margin to the th
                >
                  <span className="font-semibold text-xl">
                    Investing planning
                  </span>
                  <br />
                  <br />

                  <h2
                    className="mx-10 p-4"
                    style={{ backgroundColor: "rgba(162, 255, 130, 0.28)" }}
                  >
                    {" "}
                    <span className="text-center text-black  ">
                      As per your input, it will take{" "}
                      <span className="text-[#00A743]">2 years</span> to reach
                      your expected target. We <br /> need{" "}
                      <span className="text-[#00A743]">2,00,000</span> to
                      archive this Expected target.
                    </span>
                  </h2>
                </th>
              </tr>
              <tr>
                <td></td>
              </tr>
              <br />
              <br />{" "}
              <tr className="">
                <td className=" pl-6 text-left ">Sales</td>
                <td className="pl-64 pb-5 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    ₹47,000{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="pl-6 p-4 mt-16 text-left">Sellers</td>
                <td className="pl-64 pb-5 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    5000{" "}
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className=" pl-6 text-left ">Buyers</td>
                <td className="pl-64 pb-6 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    3000{" "}
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className=" pl-6 text-left ">Yearly Revenue</td>
                <td className="pl-64 pb-6 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    ₹77,000{" "}
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className=" pl-6 text-left ">Cash Flow</td>
                <td className="pl-64 pb-6 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    ₹70,000{" "}
                  </span>
                </td>
              </tr>
              <tr className="">
                <td className=" pl-6 text-left ">Expected ROI</td>
                <td className="pl-64 pb-6 mt-16 ">
                  {" "}
                  <span className="btn bg-[#E1F3F3] py-2 px-8 mt-3 pr-6">
                    10%{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td></td>
                <td className=" flex ml-16 mt-6 mb-6 pl-28 pr-6">
                  <button
                    className="btn bg-[#FB3B80] px-5 py-2 rounded   text-white"
                    onClick={handleReset}
                  >
                    propose a Debt
                  </button>

                  <button
                    className="btn bg-[#319795] px-3 rounded text-white ml-4"
                    onClick={handleCalculateTime}
                  >
                    Offer Investment
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SavedInvestment;
