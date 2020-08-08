import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin: 10px;
  flex: 1 0 380px;
  position: relative;
`

const Gradient = styled.div`
  display: block;
  position: absolute;
  top: 85px;
  max-width: 390px;
  width: 100%;
  height: 200px;
  background: linear-gradient(to bottom, var(--color-primary-light) 0%, transparent 100%);
  left: 50%;
  transform: translateX(-50%);
  right: 0;
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
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
  max-width: 320px;
  margin-top: 20px;
  z-index: 1;
`;

const GradientCard = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Gradient />
      <Image url={props.blok.image && props.blok.image.filename} />
      <Title>{props.blok.title}</Title>
      <Desc>{props.blok.description}</Desc>
    </Wrapper>
  </SbEditable>
);

export default GradientCard;
