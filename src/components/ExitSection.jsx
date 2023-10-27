import React, { useState } from "react";

const ExitSection = () => {
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
    <div className="flex flex-col items-center justify-center mt-16 mb-16">
      {/* <h2 className="text-2xl font-bold mb-20">Exit Calculation</h2> */}

      <table className="mx-auto rounded p-10 bg-[#EEFEFE] w-3/5 h-auto">
        <tbody>
          <br />
          <tr>
            <th
              className="text-center text-gray-800 text-xl font-normal mt-6 font-semibold  "
              colSpan="2"
              style={{ marginBottom: "32px" }} // Add margin to the th
            >
              Exit Calculation
              <br />
              <br />
              <h2
                className="mx-10"
                style={{ backgroundColor: "rgba(162, 255, 130, 0.28)" }}
              >
                {" "}
                <span className="text-cente font-semibold text-[#00A743]">
                  You can get 39% ROI in 4 investments
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
            <td className=" pl-16 text-left ">1.Total Investment (Lacs)</td>
            <td className="pl-72 pb-5 mt-16 ">
              {" "}
              <span className="btn bg-[#FFFFFF] py-2 px-8 mt-3">3 </span>
            </td>
          </tr>
          <tr>
            <td className="pl-16 p-4 mt-16 text-left">2.Total Time ( years)</td>
            <td className="pl-72 pb-4  ">
              {" "}
              <span className="btn bg-[#FFFFFF] py-2 px-8 mt-3">4</span>
            </td>
          </tr>
          <tr>
            <td className="pl-16 p-3 text-left">3.ROI (Lacs)</td>
            <td className="pl-72 pb-4 ">
              {" "}
              <span className="btn bg-[#FFFFFF] py-2 px-5 mt-3">39.77</span>
            </td>
          </tr>
          <tr>
            <td className="pl-16 p-3 text-left">4.ROI (%)</td>
            <td className="pl-72 mt-3 ">
              {" "}
              <span className="btn bg-[#FFFFFF] py-2 px-4 ml-0 mt-3">
                3962.92
              </span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td className=" flex ml-16 mt-6 mb-6 pl-32">
              <button
                className="btn bg-[#FB3B80] px-5 py-2 rounded   text-white"
                onClick={handleReset}
              >
                Reset
              </button>
              <button
                className="btn bg-[#319795] px-3 rounded text-white ml-4"
                onClick={handleCalculateTime}
              >
                Calculate
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExitSection;
