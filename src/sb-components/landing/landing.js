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
`;

const Content = styled.div`
  display: flex;
  min-height: 95vh;
  max-width: 1280px;
  margin: auto;
  position: relative;
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
  padding: 20px;
  max-width: 700px;
  animation: ${fadeIn} 800ms forwards ease-in-out;
  animation-delay: 300ms;
  opacity: 0;
`;

const Text = styled.span`
  color: ${(props) => (props.emphasize ? "var(--color-secondary)" : "inherit")};
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: -240px;
  max-height: 80vh;
  opacity: 0;
  animation: ${slideIn} 2000ms forwards ease;
  animation-delay: 600ms;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Landing = ({ blok }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (blok) {
      const images = [
        blok.image_1.filename,
        blok.image_2.filename,
        blok.image_3.filename,
        blok.image_4.filename,
      ];
      // prefetch
      images.forEach((url) => {
        const img = new window.Image();
        img.src = url;
        img.onload = () => {
          const image = blok[`image_${Math.ceil(Math.random() * 4)}`];
          if (image) {
            setImage(image.filename);
          }
        };
      });
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
          <Image src={image} />
        </Content>
        <Wave fill="#fff" style={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
