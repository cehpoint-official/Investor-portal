import React from "react";
import "./RadialProgressLossection.css"; // Make sure to import your CSS file

const RadialProgressLossection = ({ showLossSection }) => {
  return (
    <div>
      {showLossSection && (
        <div className="mt-10 flex gap-3">
          <div className="progress-bar-container">
            <div className="progress-barr">
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
            <div className="progress-barr1">
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
            <div className="progress-barr2">
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
            <div className="progress-barr3">
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

export default RadialProgressLossection;
