import Profile from "./components/profile/Profile";
import "./App.css";
import Projects from "./components/projects/Projects";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";


function App() {

  const construction = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: construction.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./assets/constructionv2.json"),
    });
  }, []);


  return (
    <div className="App">
      <Profile />
      <Projects />
      <div className="construction">
        <h2>
          WEBSITE STILL UNDER CONSTRUCTION
        </h2>
        <div className="lotti-file lottie-construction" ref={construction}></div>
      </div>
    </div>
  );
}

export default App;
