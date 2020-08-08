import React, { useState, useEffect } from "react";
import SbEditable from "storyblok-react";
import styled, { keyframes } from "styled-components";
import Layout from "./layout";
import Wave from "./wave";

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  background: var(--color-primary);
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-primary),
    #077a99
  );
  padding: 200px 80px 100px;
  position: ${(props) => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  min-height: 95vh;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blurIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Text = styled.span`
  color: ${(props) => (props.emphasize ? "var(--color-secondary)" : "inherit")};
`;

const Title = styled.h1`
  color: #fff;
  font-family: var(--font-family-serif);
  font-weight: 400;
  font-size: 60px;
  line-height: 1.3;
  max-width: 650px;
  animation: ${fadeIn} 800ms forwards ease-in-out;
  animation-delay: 300ms;
  opacity: 0;
`;

const Desc = styled.p`
  margin-top: 40px;
  color: #fff;
  max-width: 540px;
  animation: ${fadeIn} 1400ms forwards ease-in-out;
  animation-delay: 600ms;
  opacity: 0;
`;

const Image = styled.img`
  height: 80vh;
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 50%;
  opacity: 0;
  animation: ${blurIn} 2000ms forwards ease;
  animation-delay: 600ms;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Spacer = styled.div`
  min-height: 95vh;
`

const PositionedContent = ({ blok, fixed, show, image }) => {
  return (
    <Content fixed={fixed} show={show}>
      <Layout start="true">
        <Title>
          {blok.title &&
            blok.title.content &&
            blok.title.content.map((entry, i) => {
              if (entry.content) {
                return entry.content.map((span) => (
                  <Text key={span.text} emphasize={span.marks}>
                    {span.text}
                  </Text>
                ));
              } else {
                return <br />;
              }
            })}
        </Title>
        <Desc>{blok.description}</Desc>
        <Image src={image} />
      </Layout>
    </Content>
  );
};

const Landing = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.blok) {
      const images = [
        props.blok.image_1.filename,
        props.blok.image_2.filename,
        props.blok.image_3.filename,
        props.blok.image_4.filename
      ];
      // prefetch
      images.forEach(url => {
        const img = new window.Image();
        img.src = url;
      })
    }
  }, [props.blok]);

  useEffect(() => {
    const image = props.blok[`image_${Math.ceil(Math.random() * 4)}`];
    if (image) {
      setImage(image.filename);
    }
  }, [props.blok]);

  return (
    <SbEditable content={props.blok}>
      <Wrapper>
        <PositionedContent blok={props.blok} fixed show image={image} />
        <Spacer />
        <Overlay />
        <Wave fill="#fff" style={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
