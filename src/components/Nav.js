import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="NavBar">
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>My Dotfiles</li>
        <li>About me</li>
      </ul>
      <div className="underline" />
    </div>
  );
}

export default Nav;
