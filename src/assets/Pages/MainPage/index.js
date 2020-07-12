import React from "react";
import Avatar from "./elements/Avatar";
import { Link } from "react-router-dom";
import "./index.css";
import fontStyle from "./index.module.css";
import {
  faUserTie,
  faDownload,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function index() {
  return (
    <div className="main_page">
      <div className="main_page__section">
        <Avatar />
        <div>
          <h1 className={fontStyle.h1}>Avineak Duwal</h1>
        </div>
        <div>
          <h2>Student at Kathmandu University</h2>
        </div>
        <div>
          <h2>Computer Engineering</h2>
        </div>
        <Link to="/project">
          <button>
            Project <FontAwesomeIcon icon={faProjectDiagram} />
          </button>
        </Link>
        <button>
          Get my cv <FontAwesomeIcon icon={faDownload} />
        </button>
        <Link to="/about">
          <button>
            About <FontAwesomeIcon icon={faUserTie} />
          </button>
        </Link>
      </div>
    </div>
  );
}
export default index;
