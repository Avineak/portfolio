import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/project">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/dotfiles">
            My Dotfiles
          </Link>
        </li>
        {/* <li> */}
        {/*   <Link className="link" to="/about"> */}
        {/*     About */}
        {/*   </Link> */}
        {/* </li> */}
      </ul>
      <div className="underline" />
    </div>
  );
}

export default Nav;
