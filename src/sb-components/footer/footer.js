import React, { Fragment } from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "../../components/layout";
import Wave from "../../components/wave";
import { Phone, LinkedIn, Email } from "../../icons";
import _ from "lodash";

const Wrapper = styled.footer`
  max-width: 100vw;
  overflow-x: hidden;
  background: var(--color-primary);
  color: #fff;
  position: relative;
  font-family: var(--font-family-sans-serif);
`;

const Padding = styled.div`
  padding: 80px 50px 120px;
`;

const Logo = styled.img`
  max-width: 120px;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
  margin-bottom: 80px;
`;

const ContactValue = styled.a`
  display: block;
  font-size: 16px;
  font-weight: 300;
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
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 20px;
  min-height: 250px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 450px) {
    display: block;
  }
`;

const FooterBar = styled.div`
  color: #fff;
  text-align: center;
  padding: 30px;
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  a,
  span {
    display: inline-block;
    line-height: 1.8;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 450px) {
    padding: 15px;
  }
`;

const About = styled.div``;

const AboutParagraph = styled.p`
  text-align: left;
  font-size: 16px;
  line-height: 2;
`;

const Spacer = styled.span`
  display: block;
  min-height: 20px;
`;
const Footer = (props) => (
  <Fragment>
    <Wave
      style={{
        background: "var(--color-bg-light)",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
      fill="var(--color-primary)"
    />
    <Wrapper>
      <Padding>
        <Layout>
          <SbEditable content={props.blok}>
            <Content>
              <Logo
                src={props.blok.logo && props.blok.logo.filename}
                alt="Logo of NOVIXI - Executive Search"
              />
              <Contact>
                <Title>Contact</Title>
                <ContactItem>
                  <Icon>
                    <Phone width={20} height={20} fill="#fff" strokeWidth={0} />
                  </Icon>
                  <div>
                    <ContactValue
                      href={`tel:${props.blok.contact_phone_mobile}`}
                    >
                      {props.blok.contact_phone_mobile}
                    </ContactValue>
                    <ContactValue
                      href={`tel:${props.blok.contact_phone_mobile}`}
                    >
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
                    <LinkedIn
                      width={20}
                      height={20}
                      fill="#fff"
                      strokeWidth={0}
                    />
                  </Icon>
                  <div>
                    <ContactValue
                      href={props.blok.contact_linkedin}
                      target="_blank"
                      rel="noreferrer"
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
          </SbEditable>
        </Layout>
      </Padding>
      <FooterBar>
        <a
          target="_blank"
          rel="noreferrer"
          href={_.get(props.blok.terms_nl, 'filename')}
        >
          Terms & Conditions (NL)
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={_.get(props.blok.terms_en, 'filename')}
        >
          Terms & Conditions (EN)
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={_.get(props.blok.privacy, 'filename')}
        >
          Privacy statement
        </a>
        <span>{props.blok.footer_bar_text}</span>
      </FooterBar>
    </Wrapper>
  </Fragment>
);

export default Footer;
