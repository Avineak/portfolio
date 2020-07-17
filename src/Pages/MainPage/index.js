import React from "react";
import Avatar from "./elements/Avatar";
import "./index.css";
import SocialMedia from "./components/SocialMedia";
import Button from "../../components/Button";
import { download } from "../../components/IconGroup";
function index() {
  return (
    <div className="hero">
      <div className="hero_items">
        <div>
          <Avatar />
          <div className="avatar_desc">
            <p>
              Hi! My name is Avineak Duwal , and I’m student at Kathmandu
              University studying Computer Engineering. I have keen interest in
              front end technologies like react and vue. Javascript is my
              favourite language.
            </p>
            <p>
              Other than web technologies, I love desktop theming in linux and
              trying obscure softwares once in a while
            </p>
          </div>
          <SocialMedia />
          <a
            href="https://drive.google.com/u/0/uc?id=1mTFemPKu93GPKsDQq2R_ze_hmzhvIaRF&export=download"
            download
            style={{ textDecoration: "none" }}
          >
            <Button icon={download}>Get my cv</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default index;

// <div className="hero">
//   <div className="hero_group">
//     <Avatar />
//     <div>
//       <h1 className={fontStyle.h1}>Avineak Duwal</h1>
//     </div>
//     <div>
//       <h2>Student at Kathmandu University</h2>
//     </div>
//     <div>
//       <h2>Computer Engineering</h2>
//     </div>
//     <Link to="/project">
//       <button>
//         Project <FontAwesomeIcon icon={faProjectDiagram} />
//       </button>
//     </Link>
//     <button>
//       Get my cv <FontAwesomeIcon icon={faDownload} />
//     </button>
//     <Link to="/about">
//       <button>
//         About <FontAwesomeIcon icon={faUserTie} />
//       </button>
//     </Link>
//   </div>
//   <svg
//     width="1367"
//     height="287"
//     viewBox="0 0 1367 287"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path fill-rule="evenodd" clip-rule="evenodd" fill="#0099FF">
//       <animate
//         repeatCount="indefinite"
//         fill="freeze"
//         attributeName="d"
//         dur="10s"
//         values=""
//       />
//     </path>
//   </svg>
// </div>
// );
