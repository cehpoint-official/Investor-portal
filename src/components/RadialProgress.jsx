import React from "react";
import "./RadialProgress.css"; // Make sure to import your CSS file

const RadialProgress = ({ showProfitSection }) => {
  return (
    <div>
      {showProfitSection && (
        <div className="mt-10 flex gap-3">
          <div className="progress-bar-container">
            <div className="progress-bar">
              <progress
                value="75"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              >
                75%
              </progress>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar1">
              <progress
                value="5"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              >
                15%
              </progress>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar2">
              <progress
                value="55"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              >
                55%
              </progress>
            </div>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar3">
              <progress
                value="80"
                min="0"
                max="100"
                style={{ visibility: "hidden", height: "0", width: "0" }}
              >
                80%
              </progress>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RadialProgress;
