import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SurveyComponent from "./components/survey/SurveyComponent";
import TableReport from "./components/tableReport/TableReport";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SurveyComponent />,
  },
  {
    path: "report",
    element: <TableReport />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
