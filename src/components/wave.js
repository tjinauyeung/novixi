import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: -60px;
  margin-bottom: -40px;
`;

const Wave = ({ width = "100vw", fill = "white", ...props }) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <svg
        width={width}
        style={{ display: "block" }}
        viewBox={`0 0 1280 65`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M654.5 17.9975C299 58.492 0 17.9975 0 17.9975V65H1280V17.9975C1280 17.9975 1010 -22.4969 654.5 17.9975Z"
          fill={props.blok.color || fill}
        />
      </svg>
    </Wrapper>
  </SbEditable>
);

export default Wave;
