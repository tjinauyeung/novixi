import React, { Fragment } from "react";
import SbEditable from "storyblok-react";

const Splash = (props) => (
  <SbEditable content={props.blok}>
    <div>
      <h1>{props.blok.heading}</h1>
      <p>{props.blok.description}</p>
    </div>
  </SbEditable>
);

export default Splash;
