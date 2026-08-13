import { createBrowserRouter, Navigate } from "react-router-dom";
import Listing from "./pages/Listing";
import Detail from "./pages/Detail";

export const buyCarRoutes = [
  {
    path: "buy",
    children: [
      {
        index: true,
        element: <Listing />,
      },
      {
        path: ":id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/buy" replace />,
  },
];

// Create standalone router for the remote app when used independently
export const buyCarRouter = createBrowserRouter(buyCarRoutes);
