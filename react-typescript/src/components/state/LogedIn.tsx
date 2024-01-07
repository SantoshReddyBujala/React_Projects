import { useState } from "react";

export const LogedIn = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const handleLogin = () => {
    setIsLogedIn(true);
  };
  const handleLogout = () => {
    setIsLogedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
