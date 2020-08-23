import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import SbComponents from "../../sb-components";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import Section from "../../components/section";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Testimonials = ({ blok }) => (
  <SbEditable content={blok}>
    <div id="testimonials" />
    <Section>
      <Layout>
        <Wrapper>
          <Heading>{blok.title}</Heading>
          {blok.testimonials.map((testimonial) =>
            React.createElement(SbComponents(testimonial.component), {
              key: testimonial._uid,
              blok: testimonial,
            })
          )}
        </Wrapper>
      </Layout>
    </Section>
  </SbEditable>
);

export default Testimonials;
