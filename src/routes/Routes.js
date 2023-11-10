import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import InvestorPlanning from "../components/InvestorPlanning";
import Financial from "../components/Financial";
import OfferInvestment from "../components/OfferInvestment";
import SavedInvestment from "../components/SavedInvestment";
import TotalExpense from "../components/TotalExpense";
import Revenue from "../components/Revenue";
import TotalRevenue from "../components/TotalRevenue";
import RevenueProjections from "../components/RevenueProjections";

const router = createBrowserRouter([
  {
    path: "/",

    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/financial-projections",
        element: <Financial />,
      },
      {
        path: "/investor-planning",
        element: <InvestorPlanning />,
        children: [],
      },
      {
        path: "/total-expense",
        element: <TotalExpense />,
        
      },
      {
        path: "/revenue",
        element: <Revenue />,
        
      },
      {
        path: "/total-revenue",
        element: <TotalRevenue />,
        
      },
      {
        path: "/revenue-projections",
        element: <RevenueProjections />,
        
      },
      {
        path: "/investor-planning/offer-investment",
        element: <OfferInvestment />,
      },
      {
        path: "/investor-planning/offer-investment/saved-investment",
        element: <SavedInvestment />,
      },
    ],
  },
]);
export default router;
