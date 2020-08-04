import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "./layout";

const Wrapper = styled.div`
  background: var(--color-primary);
  padding: 80px;
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

const Landing = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Layout start="true">
        <Title>
          {props.blok.title.content.map((entry, i) => {
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
        <Desc>{props.blok.description}</Desc>
      </Layout>
    </Wrapper>
  </SbEditable>
);

export default Landing;
