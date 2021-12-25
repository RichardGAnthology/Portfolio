import React from "react";
import "./Blob.css";


function Blob(props) {
  return (
    <div className="blob">
      <svg
        style={{
          height: props.height,
          top: props.top,
          bottom: props.bottom,
          left: props.left,
          right: props.right,
          position: props.position,
          opacity: props.opacity,
          zIndex: "1",
        }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            fill="#F2F4F8"
          d={props.d}
        transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

{
  /* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F2F4F8" d="M32.4,-36.5C39.1,-32.9,39.8,-20,44.3,-6.1C48.8,7.8,57,22.7,52.9,31.1C48.7,39.4,32.1,41.1,18,43.8C3.8,46.5,-7.9,50.3,-23.3,50.5C-38.7,50.8,-57.7,47.5,-67.9,36.2C-78.1,24.8,-79.5,5.3,-72.8,-9.3C-66,-23.9,-51.2,-33.6,-37.7,-36C-24.2,-38.5,-12.1,-33.7,0.4,-34.1C12.8,-34.5,25.6,-40.2,32.4,-36.5Z" transform="translate(100 100)" />
</svg> */
}

export default Blob;
