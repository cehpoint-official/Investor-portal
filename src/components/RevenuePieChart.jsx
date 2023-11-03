import React from "react";
import { ResponsivePie } from "@nivo/pie";

const RevenuePieChart = ({ sectionVisible }) => {
  const data = [
    { id: "Category A", value: 30 },
    { id: "Category B", value: 20 },
    { id: "Category C", value: 25 },
    { id: "Category D", value: 15 },
  ];

  return (
    <div>
      {sectionVisible && (
        <div style={{ display: "flex", width: 600, height: 300 }}>
          <div style={{ flex: 1 }}>
            <ResponsivePie
              data={data}
              margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: "category10" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0]] }}
              enableArcLinkLabels={false}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#ffffff"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: "color" }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="transparent"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {data.map((entry, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      backgroundColor: data[index].color,
                      marginRight: 8,
                    }}
                  >
                    .
                  </div>
                  <div>{entry.id}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenuePieChart;
