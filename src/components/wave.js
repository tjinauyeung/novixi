import React from "react";

const Wave = ({ width = "100vw", fill = "white", style, ...props }) => (
  <div style={style}>
    <svg
      width={width}
      style={{ display: "block", ...props.styles }}
      viewBox="0 0 1280 30"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M654.5 8.30655C299 26.9963 0 8.30655 0 8.30655V30H1280V8.30655C1280 8.30655 1010 -10.3832 654.5 8.30655Z"
        fill={props.blok ? props.blok.color : fill}
      />
    </svg>
  </div>
);

export default Wave;
