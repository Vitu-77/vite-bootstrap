import { useCallback } from "react";

export type LoggedUser = {
  name: string;
  role: "admin" | "common";
  id: string;
};

export type AuthObject = {
  loggedUser: LoggedUser;
  logIn: (p: LogInParams) => Promise<LoggedUser>;
  logOut: () => void;
};

type LogInParams = { username: string; password: string };

const LOGGED_USER_KEY = "@logged-user";

export function useAuth(): AuthObject {
  const storedUser = localStorage.getItem(LOGGED_USER_KEY);

  const logIn = useCallback(async ({ username, password }: LogInParams) => {
    const user = { id: "AAA", role: "admin", name: username } as LoggedUser;

    localStorage.setItem(LOGGED_USER_KEY, JSON.stringify(user));

    return user;
  }, []);

  const logOut = useCallback(() => {
    localStorage.clear();
    sessionStorage.clear();
    return window.location.replace("/login");
  }, []);

  return {
    logIn,
    logOut,
    loggedUser: JSON.parse(storedUser) as LoggedUser,
  };
}
