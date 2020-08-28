import React, { useState, useEffect } from "react";
import SbEditable from "storyblok-react";
import styled, { keyframes } from "styled-components";
import Wave from "../../components/wave";
import get from "lodash.get";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  max-width: 1280px;
  min-height: calc(100vh - 80px);
  margin: auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 60px;
  line-height: 1.3;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  z-index: 1;
  padding: 50px;
  max-width: 750px;
  animation: ${fadeIn} 800ms forwards ease-in-out;
  animation-delay: 300ms;
  opacity: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    max-width: 500px;
    padding: 200px 30px 0;
    justify-content: flex-start;
  }

  @media (max-width: 450px) {
    font-size: 28px;
    padding: 120px 30px;
    text-align: center;
  }

  @media (max-width: 320px) {
    font-size: 24px;
    padding: 80px 20px;
  }
`;

const Text = styled.span`
  color: ${(props) => (props.emphasize ? "var(--color-secondary)" : "inherit")};
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: -25vh;
  max-height: 80vh;
  opacity: 0;
  animation: ${slideIn} 2000ms forwards ease;
  animation-delay: 600ms;

  @media screen and (max-width: 768px) {
    max-height: 70vh;
    right: -10vh;
  }

  @media (max-width: 450px) {
    max-height: 60vh;
    left: 0;
    right: 0;
    margin: auto;
  }

  @media (max-width: 320px) {
    max-height: 55vh;
  }
`;

const Landing = ({ blok }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (blok) {
      const image = blok[`image_${Math.ceil(Math.random() * 4)}`];
      // prefetch
      const img = new window.Image();
      img.src = image.filename;
      img.onload = () => {
        if (image) {
          setImage(image.filename);
        }
      };
    }
  }, [blok]);

  return (
    <SbEditable content={blok}>
      <div id="home" />
      <Wrapper>
        <Content>
          <Title>
            <span>
              {get(blok, "title.content", []).map((entry, i) =>
                entry.content ? (
                  entry.content.map((span) => (
                    <Text key={span.text} emphasize={span.marks}>
                      {span.text}
                    </Text>
                  ))
                ) : (
                  <br />
                )
              )}
            </span>
          </Title>
          <Image src={image} alt="Picture of a candidate for NOVIXI - Executive Search" />
        </Content>
        <Wave fill="#fff" style={{ position: "absolute", bottom: -2 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
