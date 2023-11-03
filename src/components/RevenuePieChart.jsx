import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const RevenuePieChart = ({ sectionVisible }) => {
  const data = [
    { id: "Category A", value: 30 },
    { id: "Category B", value: 20 },
    { id: "Category C", value: 25 },
    { id: "Category D", value: 15 },
  ];
 const [selectedSlice, setSelectedSlice] = useState(null);

 const handleClick = (event, slice) => {
   if (slice.id === selectedSlice) {
     setSelectedSlice(null);
   } else {
     setSelectedSlice(slice.id);
   }
 };

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
              enableArcLabels={false}
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
              fill={[
                {
                  match: {
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
                  },
                  id: "lines",
                },
              ]}
              legends={[
                {
                  anchor: "right",
                  direction: "column",

                  justify: false,
                  translateX: 50,
                  translateY: 56,
                  itemsSpacing: 10,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]}
              onClick={(event, slice) => handleClick(event, slice)}
              isInteractive={true}
            />
          </div>
          <div>
            {selectedSlice && (
              <div>
                {/* Render your section corresponding to the selected slice here */}
                <div className="text-red-800">
                  You clicked on: {selectedSlice}
                  {/* Add content specific to the selected slice */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RevenuePieChart;
