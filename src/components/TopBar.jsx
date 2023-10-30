import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [showOfferSection, setShowOfferSection] = useState(false);

  const handleOfferInvestmentClick = () => {
    // Toggle the state variable to show/hide the offer section
    setShowOfferSection(!showOfferSection);
  };

  return (
    <>
      <div className="w-full flex justify-between p-4 items-center">
        <div className="flex items-center">
          <Link to="/">
            {" "}
            <div className="mr-4 text-5xl">⬅</div>
          </Link>
        </div>
        <div className="flex items-center">
          <button className="mr-4 btn bg-[#FBBA3B] p-3 text-white">
            View Our Ask
          </button>
          <Link to="/investor-planning/offer-investment">
            <button
              className="mr-4 bg-[#36B7FF] p-3 text-white"
              onClick={handleOfferInvestmentClick}
            >
              Offer Investment
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
