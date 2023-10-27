import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import InvestorPlanning from "../components/InvestorPlanning";
import Financial from "../components/Financial";
import OfferInvestment from "../components/OfferInvestment";
import SavedInvestment from "../components/SavedInvestment";

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
