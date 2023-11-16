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
      style={{ backgroundColor: "rgba(255, 226, 122, 0.15)" }}
      className="rounded-2xl"
    >
      <h2 style={{ fontWeight: "bold", margin: "4px", color: "#000" }}>
        GMV (Gross Merchandises value)
      </h2>
      <LineChart width={500} height={400} data={data} margin={{ right: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Line type="monotone" dataKey="value" stroke="#FFB03A" /> */}
        <Legend verticalAlign="bottom" align="center" iconType="circle" />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#FFB03A"
          name="GMV value(Gross Merchandises value)"
        />
      </LineChart>
    </div>
  );
};

export default TinyLineChart;
