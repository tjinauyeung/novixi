import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";
import Layout from "../../components/layout";
import Heading from "../../components/heading";
import Section from "../../components/section";
import fadeIn from "../../hoc/fadeIn";

const Row = styled.div`
  display: flex;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Col = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    padding-right: 50px;

    &:last-child {
      padding-right: 0;
      flex: 2;
    }
  }

  @media screen and (max-width: 768px) {
    padding-right: 0;
  }
`;

const Sticky = styled.div`
  position: sticky;
  top: 150px;
  align-self: flex-start;
  width: 100%;
  text-align: left;

  @media screen and (max-width: 768px) {
    position: static;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 450px) {
    margin-bottom: 40px;
  }
`;

const LinkedInPost = styled.div`
  background-size: contain;
  background-position: center;
  background-color: #fff;
  box-shadow: 0 20px 200px rgba(0, 0, 0, 0.3);
  background-image: ${(props) => `url(${props.image})`};
  background-repeat: no-repeat;
  width: 600px;
  min-height: 675px;

  @media screen and (max-width: 450px) {
    background-position: top;
    width: calc(100vw - 40px);
    min-height: 450px;
  }
`;

const LinkedIn = styled.img`
  max-height: 42px;
  margin-left: 2px;
  margin-right: -8px;
  margin-bottom: -6px;
`;

const OnLinkedIn = ({ blok }) => (
  <SbEditable content={blok}>
    <div id="on-linkedin" />
    <Section background="var(--color-bg-linkedin)">
      <Layout>
        <Row>
          <Col>
            <Sticky>
              <Heading color="#fff">
                <span>{blok.title}</span>
                <span>
                  <LinkedIn src={blok.linkedin && blok.linkedin.filename} />
                </span>
              </Heading>
            </Sticky>
          </Col>
          <Col>
            <a
              style={{ cursor: "pointer" }}
              href="https://www.linkedin.com/posts/mirjamhesselmans_leadership-diversity-inclusion-activity-6694486970413928448-kyzw"
              target="_blank"
              rel="noreferrer"
            >
              {React.createElement(fadeIn(LinkedInPost), {
                image: blok.linkedin_post && blok.linkedin_post.filename,
              })}
            </a>
          </Col>
        </Row>
      </Layout>
    </Section>
  </SbEditable>
);

export default OnLinkedIn;
