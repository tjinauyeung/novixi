import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "./layout";
import Wave from "./wave";
import Phone from "../icons/phone";

const Wrapper = styled.footer`
  background: var(--color-primary);
  color: #fff;
  position: relative;
  font-family: var(--font-family-sans-serif);
`;

const Logo = styled.img`
  max-width: 140px;
`

const ContactItem = styled.div`
  display: flex;
  gap: 12px;
`;

const Contact = styled.div`
  max-width: 600px;
  text-align: left;
`;

const ContactValue = styled.div`
  font-size: 14px;
`;

const Title = styled.h1`
  font-size: 14px;
  font-family: var(--font-family-serif);
`;

const Content = styled.div`
  padding: 20px;
  display: flex;
  align-items: flex-start;
  gap: 100px;
  min-height: 250px;
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
        <Content>
          <Logo src={props.blok.logo && props.blok.logo.filename} />
          <Contact>
            <Title>Contact</Title>
            <ContactItem>
              <Phone width={18} height={18} fill="#fff" strokeWidth={0} />
              <div>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
              </div>
            </ContactItem>
            <ContactItem>
              <Phone width={18} height={18} fill="#fff" strokeWidth={0} />
              <div>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
              </div>
            </ContactItem>
            <ContactItem>
              <Phone width={18} height={18} fill="#fff" strokeWidth={0} />
              <div>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
                <ContactValue>{props.blok.contact_phone}</ContactValue>
              </div>
            </ContactItem>
          </Contact>
        </Content>
      </Layout>
      <FooterBar>{props.blok.footer_bar_text}</FooterBar>
    </Wrapper>
  </SbEditable>
);

export default Footer;
