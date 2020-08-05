import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "./layout";
import Wave from "./wave";

const Wrapper = styled.div`
  position: relative;
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
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
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
  return (
    <SbEditable content={props.blok}>
      <Wrapper>
        <PositionedContent blok={props.blok} fixed show />
        <PositionedContent blok={props.blok} />
        <Wave fill="#fff" style={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </SbEditable>
  );
};

export default Landing;
