import { createBrowserRouter } from "react-router-dom";

import { authStack } from "@infra/routes/stacks/auth.routes";
import { commonStack } from "@infra/routes/stacks/common.routes";
import { adminStack } from "@infra/routes/stacks/admin.routes";
import { useAuth } from "@lib/hooks/useAuth";

export function useRouter() {
  const { loggedUser } = useAuth();

  switch (loggedUser?.role) {
    case "admin":
      return createBrowserRouter(adminStack);
    case "common":
      return createBrowserRouter(commonStack);
    default:
      return createBrowserRouter(authStack);
  }
}
