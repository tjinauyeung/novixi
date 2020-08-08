import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";
import Header from "./header";
import Layout from "./layout";

const Wrapper = styled.div`
  background: var(--color-primary-lighter);
`;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 50px;
`;

const Column = styled.p`
  flex: 1 0 500px;
  text-align: left;
  padding: 20px;
`;

const Section = styled.div`
  padding: 100px 0;
`;

const Text = styled.span`
  font-weight: ${(props) => (props.emphasize ? 700 : 400)};
`;

const TwoColumnSection = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper id={props.blok.id}>
      <Layout>
        <Section>
          <Header>{props.blok.title}</Header>
          <Columns>
            <Column>
              {props.blok.column_left &&
                props.blok.column_left.content &&
                props.blok.column_left.content.map((entry, i) => {
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
            </Column>
            <Column>
              {props.blok.column_right &&
                props.blok.column_right.content &&
                props.blok.column_right.content.map((entry, i) => {
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
            </Column>
          </Columns>
        </Section>
      </Layout>
    </Wrapper>
  </SbEditable>
);

export default TwoColumnSection;
