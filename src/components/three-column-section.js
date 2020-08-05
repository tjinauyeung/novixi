import React from "react";
import SbEditable from "storyblok-react";
import Components from "./components";
import styled from "styled-components";
import Header from "./header";
import Layout from "./layout";

const Container = styled.div`
  background: #fff;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const Grid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 60px;
`;

const ThreeColumnSection = (props) => (
  <SbEditable content={props.blok}>
    <Container>
      <Layout>
        <Wrapper>
          <Header>{props.blok.title}</Header>
          <Grid>
            {props.blok.columns.map((blok) =>
              React.createElement(Components(blok.component), {
                key: blok._uid,
                blok: blok,
              })
            )}
          </Grid>
        </Wrapper>
      </Layout>
    </Container>
  </SbEditable>
);

export default ThreeColumnSection;
