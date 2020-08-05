import React, { useEffect, useRef, useState } from "react";
// import {findDOMNode} from "react-dom";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "./layout";
import Wave from "./wave";

const getBoxShadow = (props) =>
  `0 0 ${500 * props.outOfView}px ${
    100 * props.outOfView
  }px rgba(0, 0, 0, 0.5)`;

const Wrapper = styled.div`
  position: relative;
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  // box-shadow: ${getBoxShadow};
  z-index: -1;
  height: 10px;
  background: blue;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => props.outOfView};
`;

const Content = styled.div`
  background: var(--color-primary);
  padding: 200px 80px 100px;
  position: ${(props) => (props.fixed ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

const Text = styled.span`
  color: ${(props) => (props.emphasize ? "var(--color-secondary)" : "inherit")};
`;

const Title = styled.h1`
  color: #fff;
  font-family: var(--font-family-serif);
  font-size: 60px;
  line-height: 1.3;
  max-width: 650px;
`;

const Desc = styled.p`
  margin-top: 40px;
  color: #fff;
  max-width: 540px;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  object-fit: contain;
  max-height: 100%;
  transform: translateY(100px);
  z-index: -1;
  filter: ${(props) => (props.blur ? `blur(${20 * props.blur}px)` : "none")};
`;

const PositionedContent = ({ blok, fixed, show, outOfView }) => (
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
      <Image src={blok.image && blok.image.filename} blur={outOfView} />
    </Layout>
  </Content>
);

const Landing = (props) => {
  const ref = useRef(null);
  const [outOfView, setOutOfView] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const top = ref.current.getBoundingClientRect().top;
    const perc = (Number(top) / 600) * -1;
    setOutOfView(perc);
  };

  return (
    <SbEditable content={props.blok}>
      <Wrapper ref={ref}>
        <PositionedContent blok={props.blok} fixed show outOfView={outOfView} />
        <PositionedContent blok={props.blok} />
        <Overlay outOfView={outOfView} />
        <Shadow outOfView={outOfView} />
        <Wave fill="#fff" style={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
