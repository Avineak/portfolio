import React from "react";
import "./Avatar.css";
import avatar from "./avatar.jpg";

function Avatar() {
  return (
    <div className="avatar_container">
      <img src={avatar} alt="Avatar" className="avatar" />
    </div>
  );
}
export default Avatar;
