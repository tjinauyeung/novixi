import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";
import Layout from "../../components/layout";
import Heading from "../../components/heading";
import Section from "../../components/section";
import _ from "lodash";

const Row = styled.div`
  display: flex;
  flex: 1;
`;

const Col = styled.div`
  flex: 1;
`;

const Sticky = styled.div`
  position: sticky;
  top: 150px;
  align-self: flex-start;
  width: 100%;
  text-align: left;
`;

const Paragraph = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 50px;
  line-height: 1.8;
  max-width: 550px;
`;

const Text = styled.span`
  color: ${(props) => (props.emphasize ? "var(--color-secondary)" : "inherit")};
  font-weight: ${(props) => (props.emphasize ? 600 : 300)};
`;

const Arrow = styled.div`
  position: absolute;
  bottom: -200px;
  left: 0;
  width: 600px;
  height: 600px;
  transform: rotate(-20deg);
  background-image: ${props => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom center;
  opacity: 0.2;
`

const HowWeDiffer = ({ blok }) => (
  <SbEditable content={blok}>
    <Section background="var(--color-bg-dark)">
      <Layout>
        <div id="how-we-differ" />
        <Row>
          <Col>
            <Sticky>
              <Heading color="#fff">{blok.title}</Heading>
            </Sticky>
          </Col>
          <Col>
            {_.get(blok, "description.content", []).map((entry, i) => (
              <Paragraph key={i}>
                {_.get(entry, "content", []).map((span, j) => (
                  <Text key={j} emphasize={span.marks}>
                    {span.text}
                  </Text>
                ))}
              </Paragraph>
            ))}
          </Col>
        </Row>
        <Arrow image={blok.background_image && blok.background_image.filename} />
      </Layout>
    </Section>
  </SbEditable>
);

export default HowWeDiffer;
