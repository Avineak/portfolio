import React from "react";
import "./Button.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Button(props) {
  return (
    <div className="btn">
      <span>
        Get my CV
        <FontAwesomeIcon className="icon_download" icon={faDownload} />
      </span>
    </div>
  );
}
export default Button;
