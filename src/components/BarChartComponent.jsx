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

const BarChartComponent = () => {
  const data = [
    {
      category: "2019",
      option1: 100,
      option2: 120,
      option3: 80,
      option4: 90,
    },
    {
      category: "2020",
      option1: 200,
      option2: 180,
      option3: 220,
      option4: 250,
    },
    {
      category: "2021",
      option1: 300,
      option2: 280,
      option3: 320,
      option4: 350,
    },
    {
      category: "2022",
      option1: 400,
      option2: 380,
      option3: 420,
      option4: 450,
    },
    {
      category: "2023",
      option1: 500,
      option2: 480,
      option3: 520,
      option4: 550,
    },
  ];
  //  <Bar
  //         dataKey="Revenue - Sales brokerage @ 1.65%"
  //         fill="#4BFFDF"
  //         name="Revenue - Sales brokerage @ 1.65%"
  //       />
  //       <Bar
  //         dataKey="Revenue - Logistic @ 2%"
  //         fill="#F9075E"
  //         name="Revenue - Logistic @ 2%"
  //       />
  //       <Bar
  //         dataKey="Revenue - Fintech @ .10%"
  //         fill="#4FD18B"
  //         name="Revenue - Fintech @ .10%"
  //       />
  //       <Bar
  //         dataKey="Revenue - Subscription @ 10k/PA"
  //         fill="#FAB400"
  //         name="Revenue - Subscription @ 10k/PA"
  //       />

  return (
    <div
      style={{ backgroundColor: "rgba(66, 255, 251, 0.07)" }}
      className="rounded-2xl"
    >
      <h2 style={{  color: "#000" ,fontWeight:"bold",margin:"4px" }}>
        Revenue Projections from Different Streams
      </h2>
      <BarChart width={550} height={400} data={data} margin={{ right: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="option1" fill="#4BFFDF" name="Option 1" />
        <Bar dataKey="option2" fill="#F9075E" name="Option 2" />
        <Bar dataKey="option3" fill="#4FD18B" name="Option 3" />
        <Bar dataKey="option4" fill="#FAB400" name="Option 4" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
