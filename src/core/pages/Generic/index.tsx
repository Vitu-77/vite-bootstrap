import React from "react";

import { Header } from "@core/components/Header";
import { useAuth } from "@lib/hooks/useAuth";
import { containerClass } from "./styles.css";

const Generic = () => {
  const { loggedUser } = useAuth();

  return (
    <main className={containerClass}>
      <Header />
      <h1>PAGE - ({loggedUser.role})</h1>
    </main>
  );
};

export { Generic };
