import React from "react";
import "./SkillsCircle.scss";
import Spring from "../assets/Spring.png";
import Firebase from "../assets/Firebase.png";
import JS from "../assets/JS.png"
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import Java  from "../assets/Java.png"
import ReactIcon from "../assets/React.png"
import NodeJS from "../assets/NodeJS.png"


function SkillsCircle(props) {
  return (
    <container className={props.Classname}>
      <ul class="circle-container">
        <li>
        <img style={{ height: "60%" }} src={HTML} />
        </li>
        <li>
        <img style={{ height: "40%" }} src={JS} />
        </li>
        <li>
        <img style={{ height: "40%" }} src={Spring} />
        </li>
        <li>
        <img style={{ height: "60%" }} src={Firebase} />
        </li>
        <li>
        <img style={{ height: "60%" }} src={CSS} />
        </li>
        <li>
          <img style={{ height: "80%" }} src={Java} />
        </li>
        <li>
          <img style={{ height: "60%" }} src={ReactIcon} />
        </li>
        <li>
        <img style={{ height: "60%" }} src={NodeJS} />
        </li>
      </ul>
    </container>
  );
}

export default SkillsCircle;
