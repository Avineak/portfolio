import React from "react";
import "./Card.css";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  react,
  c,
  python,
  css,
  github,
  js,
  vue,
  html,
  star,
} from "../components/IconGroup";
const icon_group = {
  js,
  vue,
  html,
  css,
  react,
  c,
  python,
  star,
};
function Card(props) {
  return (
    <div className="card_container">
      <div className="card_body">
        <div className="img">
          <img src={require(`${props.image}`)} alt="React Native" />
        </div>
        <div className="card_desc">
          <div className="desc_head">
            <h3>{props.head}</h3>
          </div>
          <div className="desc_body">{props.body}</div>
          <div className="xtra_container">
            <div className="xtra">
              <div className="icon_set">
                {props.icons.map(function (icon, index) {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      className="icon"
                      icon={icon_group[icon]}
                    />
                  );
                })}{" "}
              </div>
              <Button styler={{ margin: "10px" }} className="btn" icon={github}>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
