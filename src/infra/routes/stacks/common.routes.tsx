import React from "react";
import { RouteObject } from "react-router-dom";

import { Generic } from "@core/pages/Generic";
import { GenericDetail } from "@core/pages/GenericDetail";

const commonStack: RouteObject[] = [
  {
    path: "/",
    element: <Generic />,
  },
  {
    path: "/test/:testId",
    element: <GenericDetail />,
  },
];

export { commonStack };
