import React from "react";
import { Link } from "react-router-dom";
import revenue from "../../assets/dashboard/revenue.png";
import profit from "../../assets/dashboard/profit.png";
import expense from "../../assets/dashboard/expense.png";
import sales from "../../assets/dashboard/sales.png";
import BarChartComponent from "../../components/BarChartComponent";
import TinyLineChart from "../../components/TinyLineChart";
import BiaxialLineChart from "../../components/BiaxialLineChart";
import StackedBarChart from "../../components/StackedBarChart";
import PieChartComponent from "../../components/PieChartComponent";
import topbarlogo from "../../assets/dashboard/topbar.png";

const Dashboard = () => {
  return (
    <div>
      <div class="min-h-screen">
        <div class="p-4 xl:ml-10 w-full">
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
          <div class="mt-12">
            <div class="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
              <div
                class="relative flex flex-col bg-gradient-to-b from-[#3073EC] 100% to-[#FAFDFF] 42%
               rounded-2xl bg-white text-gray-700 shadow-md"
              >
                <div class="p-4 text-left">
                  <p class="block antialiased font-sans text-[14px] leading-normal font-[400px] text-white">
                    Total Revenue in 4 year
                  </p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    INR 3,000000
                  </h4>
                  <input
                    type="button"
                    value="Know More"
                    className="bg-white text-blue-500 px-2 py-1
                   rounded-lg mt-2 font-semibold"
                  />
                </div>
                <div class="p-2 mb-3">
                  <p
                    class=" antialiased flex font-sans text-base leading-relaxed
                   font-normal text-blue-gray-600 justify-around"
                  >
                    <strong class="text-green-500 mr-16">
                      <span className="text-3xl">↑</span>2.1%
                    </strong>
                    &nbsp;
                    <img src={revenue} alt="" />
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col bg-gradient-to-b from-[#FD3A90] 100% to-[#FDFDFD] 22%
               rounded-2xl bg-white text-gray-700 shadow-md"
              >
                <div class="p-4 text-left">
                  <p class="block antialiased font-sans text-[14px] leading-normal font-[400px] text-white">
                    Total Expense in 4 year
                  </p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    INR 3,000000
                  </h4>
                  <input
                    type="button"
                    value="Know More"
                    className="bg-white text-[#FD3A90] px-2 py-1
                   rounded-lg mt-2 font-semibold"
                  />
                </div>
                <div class="p-2 mb-3">
                  <p
                    class=" antialiased flex font-sans text-base leading-relaxed
                   font-normal text-blue-gray-600 justify-around"
                  >
                    <strong class="text-green-500 mr-16">
                      <span className="text-3xl">↑</span>2.1%
                    </strong>
                    &nbsp;
                    <img src={expense} alt="" />
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col bg-gradient-to-b from-[#EBC351] 100% to-[#FFFEFD] 0%
               rounded-2xl bg-white text-gray-700 shadow-md"
              >
                <div class="p-4 text-left">
                  <p class="block antialiased font-sans text-[14px] leading-normal font-[400px] text-white">
                    Total Profit in 4 year
                  </p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    INR 3,000000
                  </h4>
                  <input
                    type="button"
                    value="Know More"
                    className="bg-white text-[#EBC351] px-2 py-1
                   rounded-lg mt-2 font-semibold"
                  />
                </div>
                <div class="p-2 mb-3">
                  <p
                    class=" antialiased flex font-sans text-base leading-relaxed
                   font-normal text-blue-gray-600 justify-around"
                  >
                    <strong class="text-green-500 mr-16">
                      <span className="text-3xl">↑</span>2.1%
                    </strong>
                    &nbsp;
                    <img src={profit} alt="" />
                  </p>
                </div>
              </div>
              <div
                class="relative flex flex-col bg-gradient-to-b from-[#00FFC4] 100% to-[#F8FFFC] 17%
               rounded-2xl bg-white text-gray-700 shadow-md"
              >
                <div class="p-4 text-left">
                  <p class="block antialiased font-sans text-[14px] leading-normal font-[400px] text-white">
                    Total Sales in 4 year
                  </p>
                  <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                    INR 3,000000
                  </h4>
                  <input
                    type="button"
                    value="Know More"
                    className="bg-white text-[#0EF8C1] px-2 py-1
                   rounded-lg mt-2 font-semibold"
                  />
                </div>
                <div class="p-2 mb-3">
                  <p
                    class=" antialiased flex font-sans text-base leading-relaxed
                   font-normal text-blue-gray-600 justify-around"
                  >
                    <strong class="text-green-500 mr-16">
                      <span className="text-3xl">↑</span>2.1%
                    </strong>
                    &nbsp;
                    <img src={sales} alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div class="mb-4">
              {/* Bar chart */}
              <div className="flex gap-4">
                <Link to="/revenue-projections">
                  <BarChartComponent />
                </Link>
                {/* Tiny Chart */}
                <TinyLineChart />
              </div>
              <div className="flex gap-4">
                <BiaxialLineChart />

                <Link to="/revenue">
                  <StackedBarChart />
                </Link>
              </div>
              <Link to="/total-expense">
                <PieChartComponent />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
