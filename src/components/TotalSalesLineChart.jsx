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

const TotalSalesTinyLineChart = () => {
  const data = [
    { name: "Jan", value: 0 },
    { name: "Feb", value: 30 },
    { name: "Mar", value: 40 },
    { name: "Apr", value: 50 },
    { name: "May", value: 60 },
    { name: "Jun", value: 60 },
    { name: "Jul", value: 70 },
    { name: "Aug", value: 75 },
    { name: "Sep", value: 85 },
    { name: "Oct", value: 95 },
    { name: "Nov", value: 65 },
    { name: "Dec", value: 75 },
  ];

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 226, 122, 0.15)",
        padding: "6px",
        width: "75%",
        marginTop: "28px",
      }}
      className="rounded-2xl"
    >
      {/* <h2 style={{ textAlign: "center", color: "#000" }}>
        GMV (Gross Merchandises value)
      </h2> */}
      <LineChart
        width={790}
        height={400}
        data={data}
        style={{ marginTop: "20px" }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#0CE549" />
        {/* <Legend verticalAlign="bottom" align="center" iconType="circle" /> */}
        <Line type="monotone" dataKey="value" stroke="#0CE549" name="Value" />
      </LineChart>
    </div>
  );
};

export default TotalSalesTinyLineChart;
