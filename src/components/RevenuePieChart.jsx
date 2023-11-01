import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const RevenuePieChart = ({ sectionVisible }) => {
const data = [
  { name: "Category A", value: 30 },
  { name: "Category B", value: 20 },
  { name: "Category C", value: 25 },
  { name: "Category D", value: 15 },
];

const COLORS = ["#FD6060", "#783DF4", "#FFD600", "#00B1D8"];
  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {sectionVisible && (
        <div>
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
              label={CustomLabel}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="middle" align="right" />
          </PieChart>
        </div>
      )}
    </div>
  );
};

export default RevenuePieChart;
