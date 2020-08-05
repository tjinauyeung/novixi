import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "./layout";
import Wave from "./wave";

const Wrapper = styled.footer`
  background: var(--color-primary);
  color: #fff;
  position: relative;
`;

const Content = styled.div`
  padding: 20px;
`;

const FooterBar = styled.div`
  background: var(--color-primary-dark);
  color: #fff;
  text-align: center;
  padding: 12px;
  text-transform: uppercase;
  font-size: 12px;
`;

const Footer = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Wave
        fill="var(--color-primary)"
        styles={{ position: "absolute", bottom: "100%", width: "100vw" }}
      />
      <Layout>
        <Content>Some text here, contact.</Content>
      </Layout>
      <FooterBar>{props.blok.footer_bar_text}</FooterBar>
    </Wrapper>
  </SbEditable>
);

export default Footer;
