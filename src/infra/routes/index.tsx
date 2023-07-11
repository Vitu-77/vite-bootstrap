import React from "react";
import { RouterProvider } from "react-router-dom";

import { useRouter } from "@lib/hooks/useRouter";

export function Routes() {
  const router = useRouter();

  return <RouterProvider router={router} />;
}
