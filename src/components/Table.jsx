import React, { useState } from "react";
import "./Tablemodal.css";

const Table = () => {
  const [selectedOption, setSelectedOption] = useState("investing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [salesData, setSalesData] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    setIsModalOpen(true);
  };
  const handleReset = () => {
    setSalesData("");
    setPrice("");
  };

  const handleCalculateTime = () => {
    // Perform time calculation
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddData = () => {
    // Here, you can process the data from input1 and input2
    // For example, you can add the data to your state or perform any other desired action.
    console.log("Data 1:", input1);
    console.log("Data 2:", input2);
    // Close the modal
    setIsModalOpen(false);
  };
  if (selectedOption === "investing") {
    return (
      <div className="p-4 mt-10 text-center">
        <table className="mx-auto rounded p-4 bg-[#EEFEFE] w-3/5 h-auto">
          <tbody>
            <tr>
              <th
                className="text-center text-gray-500 text-xl font-normal mt-6 "
                colSpan="2"
                style={{ marginBottom: "32px" }} // Add margin to the th
              >
                Investing Planning
              </th>
            </tr>
            <tr>
              <td className=" pl-4 text-left ">Sales</td>
              <td className="p-4 mt-16 ">
                {" "}
                <span className="btn bg-[#E1F3F3] py-2 px-4 mt-3">₹40,000</span>
              </td>
            </tr>
            <tr>
              <td className="pl-4 text-left">Sellers</td>
              <td className="p-4 mt-3 pl-0">
                {" "}
                <span className="btn bg-[#E1F3F3] py-2 px-5 mt-3">5000</span>
              </td>
            </tr>
            <tr>
              <td className="pl-4 text-left">Buyers</td>
              <td className="p-4 mt-3 pl-0">
                {" "}
                <span className="btn bg-[#E1F3F3] py-2 px-5 mt-3">3000</span>
              </td>
            </tr>
            <tr>
              <td className="pl-4 text-left">Yearly Revenue</td>
              <td className="p-4 mt-3 pl-0">
                {" "}
                <span className="btn bg-[#E1F3F3] py-2 px-4 ml-2 mt-3">
                  ₹47,000
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <h2 className="text-left pl-4" onClick={handleAdd}>
                  {" "}
                  <span className="btn bg-[#0B8AFF] py-1 px-6 text-white">
                    <span className="items-center justify-center  text-xl">
                      +
                    </span>
                    Add Other
                  </span>
                </h2>

                {/* Modal */}
                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <h2 className="text-left my-3 text-[18px]">
                        Add your requirement
                      </h2>
                      <input
                        type="text"
                        className="bg-[#D9D9D9]"
                        placeholder=""
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                      />
                      <h2 className="text-left my-3 text-[18px]">Add Value</h2>
                      <input
                        type="text"
                        className="bg-[#D9D9D9]"
                        value={input2}
                        onChange={(e) => setInput2(e.target.value)}
                      />
                      <button onClick={handleAddData}>Add</button>
                      <button onClick={handleCloseModal}>Close</button>
                    </div>
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className=" flex ml-16 mt-6 mb-6">
                <button
                  className="btn bg-[#FB3B80] px-5 py-2   text-white"
                  onClick={handleReset}
                >
                  Reset
                </button>
                <button
                  className="btn bg-[#319795] px-3 text-white ml-4"
                  onClick={handleCalculateTime}
                >
                  Calculate Time
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          style={{ backgroundColor: "rgba(33, 239, 0, 0.12)" }}
          className="mx-auto w-3/5 mt-10 h-auto p-1"
        >
          <h2 className="text-right   p-6 text-white">
            {" "}
            {/* <img src={save} className="w-3 h-3" alt="save" /> */}
            <span className="bg-[#00C4D0] py-1 px-3">save plane</span>
          </h2>
          <div>
            <p className="text-left ml-8 text-[20px] ">
              As per your input, it will take{" "}
              <span className="text-[#098C0E]">2 years</span> to reach your
              expected target. We <br /> need{" "}
              <span className="text-[#098C0E]">2,00,000</span> to archive this
              Expected target. <br />
              <br />
              <span className="font-semibold  mb-6">
                Do you want to propose a Debt?
              </span>
            </p>

            <div className="mt-3 mb-3 ml-48">
              <button className="px-5 py-2 mr-2 text-white bg-[#38D7FA] mt-6">
                Decide Later
              </button>
              <button className="px-5 py-2 mr-2 text-white bg-[#FE9E69] mt-6">
                No
              </button>
              <button className="px-5 py-2 text-white bg-[#0DC809] mt-6">
                Yes
              </button>
            </div>
            {/* <br /> */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Table;
