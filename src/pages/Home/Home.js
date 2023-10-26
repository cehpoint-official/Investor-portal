import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { Link } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Sidebar from "../../components/Sidebar";



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
      <Dashboard />
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
