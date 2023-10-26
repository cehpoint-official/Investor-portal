import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import InvestorPlanning from "../components/InvestorPlanning";
import Financial from "../components/Financial";

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
      },
    ],
  },
]);
export default router;
