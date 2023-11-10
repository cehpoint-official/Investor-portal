import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const FinancialLineChart = () => {
  const data = [
    { name: "Jan", value1: 0, value2: 20, value3: 15 },
    { name: "Feb", value1: 120, value2: 100, value3: 110 },
    { name: "Mar", value1: 80, value2: 140, value3: 150 },
    { name: "May", value1: 90, value2: 100, value3: 110 },
    { name: "Jun", value1: 90, value2: 120, value3: 80 },
    { name: "July", value1: 90, value2: 130, value3: 70 },
    { name: "Aug", value1: 90, value2: 140, value3: 60 },
    { name: "Sep", value1: 90, value2: 100, value3: 110 },
    { name: "Oct", value1: 90, value2: 150, value3: 100 },
    { name: "Nov", value1: 90, value2: 125, value3: 120 },
    { name: "Dec", value1: 90, value2: 110, value3: 100 },
  ];

  const containerStyle = {
    backgroundColor: "rgba(255, 226, 122, 0.15)",
    padding: "6px",
    marginTop: "28px",
    borderRadius: "0.5rem", // Apply rounded-2xl border radius
    width: "70%", // Set the width to occupy 50% of the available width
  };

  return (
    <div style={containerStyle}>
      {/* <h2 style={{ textAlign: "center", color: "#000", marginTop: "16px" }}>
        User Acquisition Progression
      </h2> */}
      <LineChart
        width={790}
        height={300}
        data={data}
        style={{ marginTop: "20px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#8884d8"
          yAxisId="left"
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#82ca9d"
          yAxisId="left"
        />
      </LineChart>
    </div>
  );
};

export default FinancialLineChart;
