import React from "react";

const Wave = ({ width = "100vw", fill = "white", style, ...props }) => (
  <div style={style}>
    <svg
      width={width}
      style={{ display: "block", ...props.styles }}
      viewBox="0 0 1440 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1440 40V0C1440 0 1092.14 23.4483 720 23.4483C347.862 23.4483 0 0 0 0V40H1440Z"
        fill={props.blok ? props.blok.color : fill}
      />
    </svg>
  </div>
);

export default Wave;
