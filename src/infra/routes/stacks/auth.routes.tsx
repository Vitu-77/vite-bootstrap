import React from "react";
import { Navigate, RouteObject } from "react-router-dom";

import { Login } from "@core/pages/Login";

const authStack: RouteObject[] = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <Navigate to="/login" />,
  },
];

export { authStack };
