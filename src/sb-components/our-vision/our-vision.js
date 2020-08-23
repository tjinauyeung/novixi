import React from "react";
import SbEditable from "storyblok-react";
import Layout from "../../components/layout";
import Heading from "../../components/heading";
import Section from "../../components/section";
import styled from "styled-components";
import fadeIn from "../../hoc/fadeIn";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Description = styled.p`
  max-width: 720px;
  font-size: 24px;
  font-weight: 300;
  margin-top: 60px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
  }

  @media (max-width: 450px) {
    font-size: 18px;
    margin-top: 30px;
  }
`;

const REGEX_NEW_LINE = /\r?\n/;

const OurVision = ({ blok }) => (
  <SbEditable content={blok}>
    <div id="our-vision" />
    <Section>
      <Layout>
        <Container>
          <Heading>{blok.title}</Heading>
          {blok.description
            .split(REGEX_NEW_LINE)
            .filter((paragraph) => Boolean(paragraph))
            .map((paragraph, i) =>
              React.createElement(fadeIn(Description), {
                key: i,
                children: paragraph,
              })
            )}
        </Container>
      </Layout>
    </Section>
  </SbEditable>
);

export default OurVision;
