import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import fadeIn from "../../../hoc/fadeIn";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 300px;
  position: relative;
  text-align: left;
  justify-content: flex-start;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 20px;
  margin-right: 50px;
  background-image: ${(props) => `url(${props.url})` || "none"};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

const Title = styled.h1`
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 30px;
  margin-top: 20px;
  max-width: 240px;
  flex: 1;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Desc = styled.p`
  font-family: var(--font-family-sans-serif);
  max-width: 380px;
  margin-top: 20px;
  z-index: 1;
`;

const Offer = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Image url={props.blok.image && props.blok.image.filename} />
      <div>
        <Title>{props.blok.title}</Title>
        <Desc>{props.blok.description}</Desc>
      </div>
    </Wrapper>
  </SbEditable>
);

export default fadeIn(Offer);
