import React from "react";
import { containerClass, logOutClass } from "./styles.css";
import { useAuth } from "@lib/hooks/useAuth";

const Header = () => {
  const { logOut } = useAuth();

  return (
    <header className={containerClass}>
      <button onClick={logOut} className={logOutClass}>
        SAIR
      </button>
    </header>
  );
};

export { Header };
