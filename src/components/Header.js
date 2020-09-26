import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Tasks from "./Tasks";

function Header() {
  return (
    <div className="header">
      <p className="header__logo">LOGO</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/tasks">Tasks</Link>
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/User">User</Link>
      </p>
    </div>
  );
}

export default Header;
