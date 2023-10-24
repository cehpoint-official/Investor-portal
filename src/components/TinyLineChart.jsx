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

const TinyLineChart = () => {
  const data = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 90 },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(255, 226, 122, 0.15)", padding: "6px" }}
    >
      <h2 style={{ textAlign: "center", color: "#000" }}>
        GMV (Gross Merchandises value)
      </h2>
      <LineChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <Legend verticalAlign="bottom" align="center" iconType="circle" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" name="Value" />
      </LineChart>
    </div>
  );
};

export default TinyLineChart;
