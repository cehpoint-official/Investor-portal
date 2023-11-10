import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const RevenuePieChart = ({ sectionVisible }) => {
  const data = [
    { id: "Revenue - Sales brokerage @ 1.65%", value: 30 },
    { id: "Revenue - Logistic @ 2%", value: 20 },
    { id: "Revenue - Fintech @ .10%", value: 25 },
    { id: "Revenue - Subscription @ 10k/PA", value: 15 },
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
              margin={{ top: 40, right: 30, bottom: 40, left: 20 }}
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
                  translateX: 20,
                  translateY: 56,
                  itemsSpacing: 5,
                  itemWidth: 170,
                  itemHeight: 20,
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
        </div>
      )}
    </div>
  );
};

export default RevenuePieChart;
