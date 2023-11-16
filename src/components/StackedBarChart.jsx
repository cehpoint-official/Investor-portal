import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const StackedBarChart = () => {
  const data = [
    {
      category: "2019",
      option1: 100,
      option2: 120,
      option3: 80,
    },
    {
      category: "2020",
      option1: 200,
      option2: 180,
      option3: 220,
    },
    {
      category: "2021",
      option1: 300,
      option2: 280,
      option3: 320,
    },
    {
      category: "2022",
      option1: 400,
      option2: 380,
      option3: 420,
    },
    {
      category: "2023",
      option1: 500,
      option2: 480,
      option3: 520,
    },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(54, 86, 253, 0.06)", marginTop: "20px" }}
      className="rounded-2xl"
    >
      <h2
        style={{
          fontWeight: "bold",
          margin: "4px",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        Revenue/Expense /P & L
      </h2>
      <BarChart width={600} height={400} data={data} margin={{ right: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="option1" fill="#3656FD" name="Option 1" />
        <Bar dataKey="option2" fill="#FFAE10" name="Option 2" />
        <Bar dataKey="option3" fill="#37FA17" name="Option 3" />
      </BarChart>
    </div>
  );
};

export default StackedBarChart;
