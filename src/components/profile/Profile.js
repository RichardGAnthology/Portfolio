import React from "react";
import "./Profile.css";
import { useState, useEffect, useRef } from "react";
import useScrollListener from "../../hooks/useScrollListener/ScrollListener";
import Richard from "../../assets/HeadPictureRichard.jpg";
import lottie from "lottie-web";
import Blob from "../Blob";

function Profile() {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/computerv9.json"),
    });
  }, []);

  return (
    <section className="profile-container">
      {/* blobs */}
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"30vh"}
        left={"11vw"}
        opacity={".5"}
        d={
          "M32.4,-36.5C39.1,-32.9,39.8,-20,44.3,-6.1C48.8,7.8,57,22.7,52.9,31.1C48.7,39.4,32.1,41.1,18,43.8C3.8,46.5,-7.9,50.3,-23.3,50.5C-38.7,50.8,-57.7,47.5,-67.9,36.2C-78.1,24.8,-79.5,5.3,-72.8,-9.3C-66,-23.9,-51.2,-33.6,-37.7,-36C-24.2,-38.5,-12.1,-33.7,0.4,-34.1C12.8,-34.5,25.6,-40.2,32.4,-36.5Z"
        }
      />
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"11vh"}
        right={"10vw"}
        opacity={".7"}
        d={
          "M48.8,-57.9C57,-51.4,53,-30,48.9,-14.3C44.9,1.3,40.8,11.3,35.8,21.3C30.8,31.4,24.8,41.5,13.3,52.8C1.7,64.1,-15.3,76.6,-24.2,71.2C-33,65.9,-33.7,42.9,-36,26.7C-38.3,10.5,-42.3,1.2,-43.3,-10.2C-44.4,-21.6,-42.5,-35,-34.8,-41.7C-27.1,-48.3,-13.6,-48.2,3.4,-52.3C20.3,-56.3,40.7,-64.5,48.8,-57.9Z"
        }
      />
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"12vh"}
        opacity={".4"}
        d={
          "M28.9,-26C42.6,-22.9,62.5,-18.7,68.5,-8.6C74.4,1.5,66.4,17.6,57.9,34.5C49.4,51.3,40.5,69,25.3,78.4C10.1,87.9,-11.4,89.1,-24.3,79.1C-37.2,69,-41.5,47.7,-44.4,31.2C-47.3,14.7,-48.8,2.9,-47.2,-8.7C-45.7,-20.4,-41,-31.8,-32.6,-36C-24.2,-40.1,-12.1,-36.8,-2.3,-34.1C7.6,-31.3,15.1,-29.2,28.9,-26Z"
        }
      />
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"52vh"}
        left={"2vw"}
        opacity={".5"}
        d={
          "M34.6,-42.3C44.8,-40.2,53,-30,55.5,-18.8C58.1,-7.6,55,4.6,52.5,18.5C50,32.4,48.1,48,39.4,54.6C30.8,61.2,15.4,58.9,4.5,52.7C-6.4,46.6,-12.9,36.6,-26.4,31.5C-40,26.5,-60.7,26.5,-65,19.6C-69.3,12.7,-57.2,-1,-51.3,-15.9C-45.4,-30.8,-45.6,-47,-38.1,-49.9C-30.6,-52.9,-15.3,-42.6,-1.5,-40.5C12.2,-38.4,24.4,-44.4,34.6,-42.3Z"
        }
      />

      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"52vh"}
        right={"2vw"}
        opacity={".7"}
        d={
          "M41,-56.4C50.3,-49.7,53.1,-33.9,59.5,-18.3C65.9,-2.8,75.9,12.6,72.1,23.1C68.2,33.7,50.5,39.4,36.2,50.2C21.9,61,10.9,76.9,-3.7,81.9C-18.3,87,-36.5,81.2,-48.1,69.5C-59.6,57.7,-64.5,40.1,-66.5,24C-68.4,7.8,-67.5,-6.9,-61.7,-18.6C-56,-30.3,-45.3,-39.1,-34.2,-45.2C-23.1,-51.4,-11.6,-55.1,2.1,-58C15.8,-61,31.7,-63.2,41,-56.4Z"
        }
      />
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"62vh"}
        right={"40vw"}
        opacity={".4"}
        d={
          "M47.6,-62.4C62.1,-55,74.5,-41.6,77.7,-26.5C81,-11.3,75.1,5.6,70,23.2C64.8,40.7,60.4,58.9,48.9,63.8C37.3,68.7,18.7,60.4,3.1,56.1C-12.5,51.9,-25,51.8,-37.7,47.2C-50.5,42.7,-63.4,33.7,-71.7,20.4C-80,7.1,-83.7,-10.7,-75.9,-21.5C-68,-32.4,-48.7,-36.4,-34.1,-43.6C-19.5,-50.9,-9.8,-61.5,3.4,-66.2C16.6,-70.9,33.2,-69.7,47.6,-62.4Z"
        }
      />
      <Blob
        height={"10em"}
        position={"absolute"}
        bottom={"15vh"}
        left={"50vw"}
        opacity={".4"}
        d={
          "M34.8,-46.7C45.1,-40.4,53.6,-30.3,53.4,-19.9C53.3,-9.5,44.6,1.1,41,13.6C37.3,26.2,38.7,40.6,32.7,52.7C26.7,64.7,13.3,74.4,2.6,70.8C-8.2,67.3,-16.3,50.5,-25.5,39.4C-34.6,28.4,-44.7,23.1,-54.5,13C-64.4,2.8,-74,-12.2,-69.2,-21.1C-64.3,-30,-45.1,-32.8,-31.2,-38C-17.3,-43.2,-8.6,-50.7,1.8,-53.2C12.2,-55.6,24.4,-53.1,34.8,-46.7Z"
        }
      />

      <nav className={navClassList.join(" ")}>
        <div className="name">Richard Gonzalez</div>
        <div className="links">
          <a
            href="https://linkedin.com/in/richard-dgonzalez/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fab fa-linkedin blue"></i>
          </a>
          <a
            href="http://twitter.com/RichardDDev"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fab fa-twitter-square"></i>
          </a>
          <a
            href="https://github.com/RichardGAnthology"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fab fa-github-square"></i>
          </a>
          <a
            href="https://docs.google.com/document/d/18PeZMFHluuda7VmH7kWjEHAmqnaZNOtq/edit"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fas fa-file"></i>
          </a>
        </div>
      </nav>
      <div className="description">
        <div className="name-intro">
          <h1>Hi, I'm Richard! </h1>
        </div>
        <div className="about-me">
          <h3>
            I'm a passionate web developer <br /> with experience building
            applications with <br /> Javascript, ReactJS, Java, Springboot,
            firebase, <br />
            and other amazing technologies! <br /> My background consists of
            experience in <br /> Retail, Higher Education, Operations, Law{" "}
            <br /> and now, Web Development!
          </h3>
        </div>
        <div className="profile-picture">
          <img src={Richard}></img>
        </div>
      </div>

      <div className="lotti-file container" ref={container}></div>

      <div className="profile-svg">
        <div class="custom-shape-divider-bottom-1640354007">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Profile;
