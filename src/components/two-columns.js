import React from "react";
import styled from "styled-components";
import SbEditable from "storyblok-react";
import Header from "./header";
import Layout from "./layout";

const Wrapper = styled.div`
  background: var(--color-primary-lighter);
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const Column = styled.div`
  display: flex;
  text-align: left;
  padding: 20px;
`;

const Section = styled.div`
  padding: 30px 0;
`

const TwoColumns = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Layout>
        <Section>

        <Header>{props.blok.title}</Header>
        <Columns>
          <Column>{props.blok.column_left}</Column>
          <Column>{props.blok.column_right}</Column>
        </Columns>
        </Section>
      </Layout>
    </Wrapper>
  </SbEditable>
);

export default TwoColumns;
