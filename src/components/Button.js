import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Button(props) {
  return (
    <div className="btn" style={props.styler}>
      <span>
        {props.children}
        <FontAwesomeIcon className="icon_download" icon={props.icon} />
      </span>
    </div>
  );
}
export default Button;
