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
`;

const Col = styled.div`
  flex: 1;

  &:last-child {
    transform: translateX(-50px);
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 150px;
  align-self: flex-start;
  width: 100%;
  text-align: left;
`;

const WhatWeOffer = ({ blok }) => (
  <SbEditable content={blok}>
    <Section background="var(--color-bg-light)">
      <div id="what_we_offer" />
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
