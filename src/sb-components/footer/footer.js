import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Wave from "../../components/wave";
import { Phone, LinkedIn, Email } from "../../icons";
import _ from 'lodash';

const Wrapper = styled.footer`
  background: var(--color-primary);
  color: #fff;
  position: relative;
  font-family: var(--font-family-sans-serif);
`;

const Logo = styled.img`
  max-width: 120px;
`;

const Icon = styled.div`
  border-radius: 500px;
  background: var(--color-primary-dark);
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 12px;
`;

const Contact = styled.div`
  max-width: 600px;
  text-align: left;
`;

const ContactValue = styled.a`
  display: block;
  font-size: 16px;
  padding: 5px 10px;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 24px;
  font-family: var(--font-family-narrow);
  text-transform: uppercase;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 40px;
`;

const Content = styled.div`
  padding: 50px 0;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  gap: 20px;
  min-height: 250px;
`;

const FooterBar = styled.div`
  color: #fff;
  text-align: center;
  padding: 50px;
  text-transform: uppercase;
  font-size: 12px;
`;

const About = styled.div``;

const AboutParagraph = styled.p`
  text-align: left;
  font-size: 16px;
`;

const Spacer = styled.span`
  display: block;
  min-height: 20px;
`;
const Footer = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Wave
        fill="var(--color-primary)"
        styles={{
          position: "absolute",
          bottom: "100%",
          marginBottom: -2,
          width: "100vw",
        }}
      />
      <Layout>
        <Content>
          <Logo src={props.blok.logo && props.blok.logo.filename} />
          <Contact>
            <Title>Contact</Title>
            <ContactItem>
              <Icon>
                <Phone width={20} height={20} fill="#fff" strokeWidth={0} />
              </Icon>
              <div>
                <ContactValue href={`tel:${props.blok.contact_phone_mobile}`}>
                  {props.blok.contact_phone_mobile}
                </ContactValue>
                <ContactValue href={`tel:${props.blok.contact_phone_mobile}`}>
                  {props.blok.contact_phone_office}
                </ContactValue>
              </div>
            </ContactItem>
            <ContactItem>
              <Icon>
                <Email
                  width={22}
                  height={22}
                  fill="#fff"
                  strokeWidth={2}
                  stroke="var(--color-primary-dark)"
                />
              </Icon>
              <div>
                <ContactValue href={`mailto:${props.blok.contact_email}`}>
                  {props.blok.contact_email}
                </ContactValue>
              </div>
            </ContactItem>
            <ContactItem>
              <Icon>
                <LinkedIn width={20} height={20} fill="#fff" strokeWidth={0} />
              </Icon>
              <div>
                <ContactValue
                  href={props.blok.contact_linkedin}
                  target="_blank"
                >
                  {props.blok.contact_linkedin_label}
                </ContactValue>
              </div>
            </ContactItem>
          </Contact>
          <About>
            <Title>{props.blok.about_title}</Title>
            <AboutParagraph>
              {_.get(props, "blok.about_description.content", []).map(
                (entry, i) => {
                  if (entry.content) {
                    return entry.content.map((span) => (
                      <span key={i}>{span.text}</span>
                    ));
                  } else {
                    return <Spacer key={i} />;
                  }
                }
              )}
            </AboutParagraph>
          </About>
        </Content>
      </Layout>
      <FooterBar>{props.blok.footer_bar_text}</FooterBar>
    </Wrapper>
  </SbEditable>
);

export default Footer;
