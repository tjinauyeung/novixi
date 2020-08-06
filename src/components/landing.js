import React, { useRef, useState, useEffect } from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
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
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
`;

const Desc = styled.p`
  margin-top: 40px;
  color: #fff;
  max-width: 540px;
`;

const Image = styled.img`
  position: absolute;
  top: auto;
  right: 0;
  bottom: 0;
  left: 50%;
  object-fit: contain;
  max-height: 95%;
  transform: translateY(100px);
  z-index: -1;
  filter: ${(props) => (props.blur ? `blur(${20 * props.blur}px)` : "none")};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PositionedContent = ({ blok, fixed, show, blur }) => (
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
      <Image src={blok.image && blok.image.filename} blur={blur} />
    </Layout>
  </Content>
);

const Landing = (props) => {
  const ref = useRef(null);
  const [blur, setBlur] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    const top = ref.current.getBoundingClientRect().top;
    const blur = (Number(top) / 600) * -1;
    setBlur(blur);
  };

  return (
    <SbEditable content={props.blok}>
      <Wrapper ref={ref}>
        <PositionedContent blok={props.blok} fixed show blur={blur} />
        <PositionedContent blok={props.blok} />
        <Overlay blur={blur} />
        <Wave fill="#fff" style={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
