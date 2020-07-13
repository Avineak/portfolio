import React from "react";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialMedia.css";

function SocialMedia() {
  return (
    <div>
      <div className="social_links">
        <a href="https://www.google.com">
          <FontAwesomeIcon className="font" icon={faFacebook} />
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon className="font" icon={faTwitter} />
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon className="font" icon={faGithub} />
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon className="font" icon={faLinkedinIn} />
        </a>
      </div>
    </div>
  );
}
export default SocialMedia;
