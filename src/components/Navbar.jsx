import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  return (
    <div>
      <Link to="/">Home</Link>
      {!user ? (
        <Link to="/auth">Login</Link>
      ) : (
        <button onClick={() => logout()}>logout</button>
      )}
    </div>
  );
};

export default Navbar;
