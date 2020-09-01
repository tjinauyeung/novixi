import React, { useState, Fragment } from "react";
import SbEditable from "storyblok-react";
import styled, { keyframes } from "styled-components";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import Section from "../../components/section";

const Description = styled.p`
  max-width: 750px;
  margin: 80px auto;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 450px) {
    margin: 60px auto;
    font-size: 18px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  max-width: 720px;
  margin: 0 auto 100px;
`;

const Row = styled.div`
  display: grid;
  margin: 15px;
  flex: 1;
  width: 100%;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  div {
    position: relative;
  }

  @media screen and (max-width: 450px) {
    display: block;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  padding: 18px;
  font-family: var(--font-family-sans-serif);
  font-size: 16px;
  width: 100%;
  border: none;
  flex: 1;
  transition: all 200ms ease;

  &:focus {
    box-shadow: 0 0 0 3px var(--color-primary-light);
    outline: none;
  }

  @media screen and (max-width: 450px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  min-height: 180px;
  font-family: var(--font-family-sans-serif);
  font-size: 16px;
  padding: 18px;
  appearance: none;
  grid-column: span 2;
  resize: none;

  &:focus {
    box-shadow: 0 0 0 3px var(--color-primary-light);
    outline: none;
  }
`;

const Button = styled.button`
  background: var(--color-primary);
  border: none;
  padding: 18px 20px;
  margin-top: 20px;
  width: 100%;
  color: #fff;
  font-size: 20px;
  font-family: var(--font-family-narrow);
  text-transform: uppercase;
  transition: all 200ms ease;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: var(--color-primary-dark);
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0 0 12px;
  margin-right: 50px;
  cursor: pointer;

  span {
    color: #777;
  }
`;

const Check = styled.span`
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid var(--color-primary-light);
  box-shadow: inset 0 0 0 50px #fff;
  margin-right: 10px;
  transition: all 100ms ease;
`;

const Checkbox = styled.input`
  display: none;

  &:checked + ${Check} {
    background: var(--color-primary);
    box-shadow: inset 0 0 0 5px #fff;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Load = styled.div`
  display: inline-block;
  position: relative;
  width: 22px;
  height: 22px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    border: 1px solid currentColor;
    border-radius: 100%;
    animation: ${spin} 1s linear infinite;
    border-color: currentColor currentColor transparent transparent;
  }
`;

const Loader = () => (
  <Load>
    <div></div>
  </Load>
);

const SuccessMessage = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 720px;
  height: 537px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-dark);
  color: #fff;

  h1 {
    font-family: var(--font-family-narrow);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 42px;
    margin: 0;
  }

  p {
    font-size: 24px;
    margin: 0;
    margin-top: 10px;
  }
`;

const ContactUs = ({ blok }) => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = (ev) => {
    ev.preventDefault();
    setLoading(true);
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
      setLoading(false);
    };
    xhr.send(data);
  };

  return (
    <Fragment>
      <div id="contact-us" />
      <Section background="var(--color-bg-light)">
        <Layout>
          <SbEditable content={blok}>
            <Wrapper>
              <Heading>{blok.title}</Heading>
              <Description>{blok.description}</Description>
              {status === "SUCCESS" ? (
                <SuccessMessage>
                  <h1>{blok.success_title}</h1>
                  <p>{blok.success_description}</p>
                </SuccessMessage>
              ) : (
                <FormWrapper
                  onSubmit={submit}
                  action="https://formspree.io/xoqkrrlk"
                  method="POST"
                >
                  <Row>
                    <Input
                      htmlFor="name"
                      type="name"
                      name="name"
                      placeholder={blok.form_name}
                    />

                    <Input
                      type="company"
                      name="company"
                      placeholder={blok.form_company}
                    />
                  </Row>
                  <Row>
                    <Input
                      type="email"
                      name="email"
                      placeholder={blok.form_email}
                    />

                    <Input
                      type="phone"
                      name="phone"
                      placeholder={blok.form_phone}
                    />
                  </Row>
                  <Row>
                    <TextArea name="message" placeholder={blok.form_message} />
                  </Row>
                  <Row>
                    <CheckboxLabel>
                      <Checkbox
                        type="radio"
                        name="contact_preference"
                        value="by_phone"
                      />
                      <Check />
                      <span>{blok.form_contact_preference_phone}</span>
                    </CheckboxLabel>
                    <CheckboxLabel>
                      <Checkbox
                        type="radio"
                        name="contact_preference"
                        value="by_email"
                      />
                      <Check />
                      <span>{blok.form_contact_preference_email}</span>
                    </CheckboxLabel>
                  </Row>
                  <Button>{loading ? <Loader /> : blok.form_button}</Button>
                </FormWrapper>
              )}
            </Wrapper>
          </SbEditable>
        </Layout>
      </Section>
    </Fragment>
  );
};

export default ContactUs;
