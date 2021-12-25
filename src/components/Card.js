import React from "react";
import "./Card.module.scss";
import classes from "./Card.module.scss";

function Card(props) {
  return (
    <section className={props.className}>
      <figure>
        <h1>{props.title}</h1>
        {/* Image being passed through as props */}
        <img src={props.src} alt={props.alt} />
        <figcaption>
          <h3>More Info</h3>
          <p>{props.info}</p>
          <div className={classes.buttons}>
            {" "}
            {/* Link to the GitHub */}
            <a href={props.href} target="_blank" rel="noreferrer noopener">
              {" "}
              <button>GitHub</button>
            </a>

            {/* Link to the Deployed App */}
            <a href={props.href2} target="_blank" rel="noreferrer noopener">
              <button>Deployed App</button>
            </a>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default Card;
