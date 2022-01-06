import React from "react";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Projects.scss";
import Card from "../Card";
import DrawingScreenshot from "../../assets/DrawingScreenshot5.png";
import InvestmentTracker from "../../assets/InvestmentTracker.png"
import MeetupApp from "../../assets/MeetupApp.png"
import GroceryApp from "../../assets/GroceryApp.png"
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
        secondButton={"Deployed App"}
      />{" "}
      <Card
        className={"card-2"}
        title={"Investing App"}
        src={InvestmentTracker}
        info={
          "This is an investment tracking application I created as part of a bootcamp graduation project! It implements technologies like React.js, SpringBoot, and MySQL. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/Investment-Management-Tool"}
        href2={"https://www.youtube.com/watch?v=pTKnAlypH1g"}
        secondButton={"Youtube Link"}
      />{" "}

      <Card
        className={"card-3"}
        title={"Meetup App"}
        src={MeetupApp}
        info={
          "This is a meetup application I created as part of an online Udemy course that allows users to save meetup locations! It implements technologies like React.js, React Context, and Firebase. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/React-Meetup-App"}
        href2={"https://react-meetup-c078d.web.app/"}
        secondButton={"Deployed App"}
      />{" "}
      <Card
        className={"card-4"}
        title={"Grocery App"}
        src={GroceryApp}
        info={
          "This is a grocery tracking application I created during my time in a Software Engineering Bootcamp! It implements technologies like React.js, and CSS. Click the links below to find out more!"
        }
        href={"https://github.com/RichardGAnthology/PerScholas/tree/master/Mod2/groceries_hw"}
        href2={"https://grocery-app-a8fae.web.app/"}
        secondButton={"Deployed App"}
      />
      <div className="skills">
        {/* circle of skills */}
        {/* <SkillsCircle className={"skills-circle"} /> */}
      
      </div>
     
    </section>
  );
};

export default Projects;
