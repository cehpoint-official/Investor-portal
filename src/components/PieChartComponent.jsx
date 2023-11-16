import React from "react";
import { ResponsivePie } from "@nivo/pie";

const data = [
  { id: "Category 1", value: 100, color: "#FF406E" },
  { id: "Category 2", value: 200, color: "#0085FF" },
  { id: "Category 3", value: 300, color: "#FFF50B" },
  { id: "Category 4", value: 400, color: "#7654FF" },
  { id: "Category 5", value: 500, color: "#2EEF92" },
  { id: "Category 6", value: 700, color: "#FFCF54" },
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
      <h2
        style={{
          textAlign: "center",
          color: "#000",
          fontWeight: "bold",
          marginTop: "4px",
        }}
      >
        Total Expense
      </h2>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 200, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={(datum) => datum.data.color} // Use the custom colors from data
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
