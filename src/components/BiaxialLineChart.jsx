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

const BiaxialLineChart = () => {
  const data = [
    { name: "Jan", value1: 0, value2: 20, value3: 15 },
    { name: "Feb", value1: 120, value2: 180, value3: 220 },
    { name: "Mar", value1: 80, value2: 240, value3: 190 },
    { name: "Apr", value1: 90, value2: 160, value3: 180 },
  ];

  const containerStyle = {
    backgroundColor: "rgba(255, 0, 153, 0.05)",
    padding: "6px",
    marginTop: "20px",
    borderRadius: "0.5rem", // Apply rounded-2xl border radius
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", color: "#000", marginTop: "16px" }}>
        User Acquisition Progression
      </h2>
      <LineChart width={550} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value1"
          stroke="#8884d8"
          name="Value 1"
          yAxisId="left"
        />
        <Line
          type="monotone"
          dataKey="value2"
          stroke="#82ca9d"
          name="Value 2"
          yAxisId="left"
        />
        <Line
          type="monotone"
          dataKey="value3"
          stroke="#ffc658"
          name="Value 3"
          yAxisId="right"
        />
      </LineChart>
    </div>
  );
};

export default BiaxialLineChart;
