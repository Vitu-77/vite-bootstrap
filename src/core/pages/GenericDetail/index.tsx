import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "@core/components/Header";
import { useAuth } from "@lib/hooks/useAuth";
import { containerClass } from "./styles.css";

const GenericDetail = () => {
  const { loggedUser } = useAuth();
  const { testId } = useParams();

  return (
    <main className={containerClass}>
      <Header />
      <h1>PAGE - ({loggedUser.role})</h1>
      <h3>ID: [{testId}]</h3>
    </main>
  );
};

export { GenericDetail };
