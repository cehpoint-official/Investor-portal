import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "Category 1", value: 100 },
  { id: "Category 2", value: 200 },
  { id: "Category 3", value: 300 },
  { id: "Category 4", value: 400 },
  { id: "Category 5", value: 500 },
];

const PieChartComponent = () => {
  return (
    <div
      style={{
        height: "400px",
        width: "1060px",
        position: "relative",
        background: "rgba(118, 84, 255, 0.08)",
        marginTop: "20px",
      }}
      className="rounded-2xl"
    >
      <h2 style={{ textAlign: "center", color: "#000" }}>Total Expense</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 200, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        enableArcLinkLabels={false}
        enableArcLabels={false}
        legends={[
          {
            anchor: "right",
            direction: "column",
            translateX: 140,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#333333",
          },
        ]}
      />
    </div>
  );
};

export default PieChartComponent;
