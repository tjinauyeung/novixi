import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import fadeIn from "../../../hoc/fadeIn";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  position: relative;
  text-align: left;
  justify-content: flex-start;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 50px;
    align-items: center;
  }
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

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media only screen and (max-width: 450px) {
    width: 80px;
    height: 80px;
    margin: 0;
  }
`;

const Text = styled.div`
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Desc = styled.p`
  font-family: var(--font-family-sans-serif);
  max-width: 500px;
  margin-top: 20px;
  font-size: 24px;
  z-index: 1;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 16px;
    text-align: center;
  }
`;

const Offer = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Image url={props.blok.image && props.blok.image.filename} />
      <Text>
        <Title>{props.blok.title}</Title>
        <Desc>{props.blok.description}</Desc>
      </Text>
    </Wrapper>
  </SbEditable>
);

export default fadeIn(Offer);
