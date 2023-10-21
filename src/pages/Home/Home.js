import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[290px] h-[605px] bg-[#319795] text-white">
      <div className="text-center p-4">
        {/* <h2 className="text-xl font-semibold">Sidebar</h2> */}
      </div>
      <ul className="list-none p-0 ">
        <li className="p-4 cursor-pointer text-center">Overview</li>
        <li className="p-4 cursor-pointer text-center">Petch Deck</li>
        <li className="p-4 cursor-pointer">
          {/* Use the Link component for the clickable link */}
          <Link
            to="/financial-projections"
            className="block w-full py-2 bg-white rounded-xl text-[#319795] text-center font-semibold"
          >
            Financial Projections
          </Link>
        </li>
        <li className="p-4 cursor-pointer text-center">Investing Planning</li>
      </ul>
      <h2 className=" p-4 text-[15px] text-center ">
        Email Us for more information
      </h2>
      <h2 className=" p-4 text-[15px] text-center">
        Visit the site BIDCHEMZ.com
      </h2>
    </div>
  );
};

const Home = () => {
  const mostSearchedProduct = {
    name: "Product A",
    searches: 5000, // Replace with the actual number of searches
    views: 8000, // Replace with the actual number of views
  };

  const pieChartData = [
    {
      id: "Searches",
      label: "Searches",
      value: mostSearchedProduct.searches,
    },
    {
      id: "Views",
      label: "Views",
      value: mostSearchedProduct.views,
    },
  ];

  // Bar chart data
  const barData = [
    {
      country: "Searches",
      value: mostSearchedProduct.searches,
    },
    {
      country: "Views",
      value: mostSearchedProduct.views,
    },
  ];

  // Line chart data (assuming a time-based x-axis, e.g., months)
  const lineData = [
    {
      time: "January",
      searches: mostSearchedProduct.searches,
      views: mostSearchedProduct.views,
    },
    // Add data points for other months as needed
  ];
  return (
    <div className="flex">
      <Sidebar />
      {/* <div className="flex-1 p-4">
        <div style={{ height: "400px" }}>
          <ResponsiveBar
            data={barData}
            keys={["value"]}
            indexBy="country"
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          />
        </div>
        <div style={{ height: "400px" }}>
          <ResponsiveLine
            data={lineData}
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
          />
        </div>
        <div style={{ height: "400px" }}>
          <ResponsivePie data={pieChartData} />
        </div>
      </div> */}
    </div>
  );
};

export default Home;
