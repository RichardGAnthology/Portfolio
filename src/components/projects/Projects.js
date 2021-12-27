import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Projects.scss";
import Card from "../Card";
import DrawingScreenshot from "../../assets/DrawingScreenshot5.png";
import SkillsCircle from "../SkillsCircle";

const Projects = () => {
  const construction = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: construction.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/constructionv2.json"),
    });
  }, []);

  return (
    <section className="projects-container">
      {" "}
      <Card
        className={"card-1"}
        title={"Drawing App"}
        src={DrawingScreenshot}
        info={
          "This is a drawing application I and another junior developer created during a week long hackathon event! It implements technologies like React.js, Canvas, and Firebase. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/Drawing-App"}
        href2={"https://drawing-between-the-lines.web.app/landingPage"}
      />{" "}
      <Card
        className={"card-2"}
        title={"Drawing App"}
        src={DrawingScreenshot}
        info={
          "This is a drawing application I and another junior developer created during a week long hackathon event! It implements technologies like React.js, Canvas, and Firebase. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/Drawing-App"}
        href2={"https://drawing-between-the-lines.web.app/landingPage"}
      />{" "}
      <Card
        className={"card-3"}
        title={"Drawing App"}
        src={DrawingScreenshot}
        info={
          "This is a drawing application I and another junior developer created during a week long hackathon event! It implements technologies like React.js, Canvas, and Firebase. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/Drawing-App"}
        href2={"https://drawing-between-the-lines.web.app/landingPage"}
      />{" "}
      <Card
        className={"card-4"}
        title={"Drawing App"}
        src={DrawingScreenshot}
        info={
          "This is a drawing application I and another junior developer created during a week long hackathon event! It implements technologies like React.js, Canvas, and Firebase. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/Drawing-App"}
        href2={"https://drawing-between-the-lines.web.app/landingPage"}
      />
      <div className="skills">
        {/* circle of skills */}
        {/* <SkillsCircle className={"skills-circle"} /> */}
      </div>
    </section>
  );
};

export default Projects;
