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
      category: "Category 1",
      option1: 100,
      option2: 120,
      option3: 80,
    },
    {
      category: "Category 2",
      option1: 200,
      option2: 180,
      option3: 220,
    },
    {
      category: "Category 3",
      option1: 300,
      option2: 280,
      option3: 320,
    },
    {
      category: "Category 4",
      option1: 400,
      option2: 380,
      option3: 420,
    },
    {
      category: "Category 5",
      option1: 500,
      option2: 480,
      option3: 520,
    },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(54, 86, 253, 0.06)", marginTop: "20px" }}
    >
      <h2 style={{ textAlign: "center", color: "#000" }}>
        Revenue/Expense /P & L
      </h2>
      <BarChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="option1" fill="#8884d8" name="Option 1" />
        <Bar dataKey="option2" fill="#82ca9d" name="Option 2" />
        <Bar dataKey="option3" fill="#ffc658" name="Option 3" />
      </BarChart>
    </div>
  );
};

export default StackedBarChart;
