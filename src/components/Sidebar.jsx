import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState("overview");

  // Use location.pathname to set the selectedOption based on the current route
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedOption("overview");
    } else if (location.pathname === "/financial-projections") {
      setSelectedOption("financial");
    } else if (location.pathname === "/investor-planning") {
      setSelectedOption("investing");
    }
  }, [location.pathname]);

  return (
    <div className="w-[290px] h-[605px] bg-[#319795] text-white">
      <div className="text-center p-4"></div>
      <ul className="list-none p-0">
        <li
          className={`p-2 mx-2 cursor-pointer text-center ${
            selectedOption === "overview"
              ? "bg-white rounded-xl text-[#319795] font-semibold"
              : ""
          }`}
        >
          <Link to="/">Overview</Link>
        </li>
        <li className="p-2 mx-2 cursor-pointer text-center">
          <Link to="/total-revenue">Pitch Deck</Link>
        </li>
        <li
          className={`p-2 mx-2 cursor-pointer text-center ${
            selectedOption === "financial"
              ? "bg-white rounded-xl text-[#319795] font-semibold"
              : ""
          }`}
        >
          <Link to="/financial-projections">Financial Projections</Link>
        </li>
        <li
          className={`p-2 mx-2 cursor-pointer text-center ${
            selectedOption === "investing"
              ? "bg-white rounded-xl text-[#319795] font-semibold"
              : ""
          }`}
        >
          <Link to="/investor-planning">Investing Planning</Link>
        </li>
      </ul>
      <h2 className="p-4 text-[15px] text-center">
        Email Us for more information
      </h2>
      <h2 className="p-4 text-[15px] text-center">
        Visit the site BIDCHEMZ.com
      </h2>
    </div>
  );
};

export default Sidebar;
