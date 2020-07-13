import React from "react";
import {
  facebook,
  linked,
  twitter,
  github,
} from "../../../components/IconGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div>
      <div className="social_links">
        <a href="https://www.facebook.com/profile.php?id=100011325973135">
          <FontAwesomeIcon className="font" icon={facebook} />
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon className="font" icon={twitter} />
        </a>
        <a href="https://github.com/avineak">
          <FontAwesomeIcon className="font" icon={github} />
        </a>
        <a href="https://www.linkedin.com/in/avineak-duwal-886b9a167/">
          <FontAwesomeIcon className="font" icon={linked} />
        </a>
      </div>
    </div>
  );
}
export default SocialMedia;
