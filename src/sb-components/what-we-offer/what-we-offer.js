import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";
import Layout from "../../components/layout";
import Heading from "../../components/heading";
import Section from "../../components/section";
import SbComponents from "../../sb-components";

const Row = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Col = styled.div`
  flex: 1;

  &:last-child {
    transform: translateX(-160px);

    @media screen and (max-width: 768px) {
      flex: 2;
      transform: translateX(0);
    }

    @media screen and (max-width: 450px) {
      transform: translateX(0);
    }
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 150px;
  align-self: flex-start;
  width: 100%;
  text-align: left;

  @media screen and (max-width: 450px) {
    position: static;
    margin-bottom: 40px;
  }
`;

const WhatWeOffer = ({ blok }) => (
  <SbEditable content={blok}>
    <div id="what-we-offer" />
    <Section background="var(--color-bg-light)">
      <Layout>
        <Row>
          <Col>
            <Sticky>
              <Heading>{blok.title}</Heading>
            </Sticky>
          </Col>
          <Col>
            {blok.list.map((blok) =>
              React.createElement(SbComponents(blok.component), {
                key: blok._uid,
                blok: blok,
              })
            )}
          </Col>
        </Row>
      </Layout>
    </Section>
  </SbEditable>
);

export default WhatWeOffer;
