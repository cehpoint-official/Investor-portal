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
    }else if (location.pathname === "/pitch-deck") {
      setSelectedOption("pitch");
    }
  }, [location.pathname]);

  return (
    <div className="  bg-[#319795] text-white min-h-screen p-2 ">
      <ul className="list-none mt-10 ">
        <Link to="/">
          <li
            className={`p-2 w-52 mx-2 cursor-pointer text-center ${
              selectedOption === "overview"
                ? "bg-white rounded-xl text-[#319795] font-semibold"
                : ""
            }`}
          >
            Overview
          </li>
        </Link>

        <Link to="/pitch-deck">
          <li
            className={`p-2 w-52 mx-2 cursor-pointer text-center ${
              selectedOption === "pitch"
                ? "bg-white rounded-xl text-[#319795] font-semibold"
                : ""
            }`}
          >
            Pitch Deck
          </li>
        </Link>

        <Link to="/financial-projections">
          <li
            className={`p-2 mx-2 w-52 cursor-pointer text-center ${
              selectedOption === "financial"
                ? "bg-white rounded-xl text-[#319795] font-semibold"
                : ""
            }`}
          >
            Financial Projections
          </li>
        </Link>

        <Link to="/investor-planning">
          <li
            className={`p-2 mx-2 w-52 cursor-pointer text-center ${
              selectedOption === "investing"
                ? "bg-white rounded-xl text-[#319795] font-semibold"
                : ""
            }`}
          >
            {" "}
            Investing Planning
          </li>
        </Link>
      </ul>
      <h2 className=" w-52  mt-6 p-4 text-[15px] text-center cursor-pointer " >
        Email Us for more information
      </h2>
      <h2 className=" w-52 p-4 text-[15px] text-center cursor-pointer">
        Visit the site BIDCHEMZ.com
      </h2>
    </div>
  );
};

export default Sidebar;
