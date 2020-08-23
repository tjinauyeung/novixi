import React, { useState, useRef, useEffect } from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Heading from "../../components/heading";
import Layout from "../../components/layout";
import Section from "../../components/section";

const Description = styled.p`
  max-width: 750px;
  margin: 80px auto;
  font-size: 24px;
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

const ContactUs = (props) => {
  const ref = useRef(null);
  const [focus, setFocus] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocus(true);
          }
        });
      },
      {
        root: document.querySelector("null"),
        rootMargin: "0px",
        threshold: 1.0,
      }
    );
    observer.observe(ref.current);
  }, []);

  const submit = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(data);
  };

  return (
    <SbEditable content={props.blok}>
      <div ref={ref} />
      <Section background="var(--color-bg-light)">
        <Layout>
          <Wrapper>
            <Heading>{props.blok.title}</Heading>
            <Description>{props.blok.description}</Description>
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
                  focus={focus}
                  placeholder={props.blok.form_name}
                />

                <Input
                  type="company"
                  name="company"
                  placeholder={props.blok.form_company}
                />
              </Row>
              <Row>
                <Input
                  type="email"
                  name="email"
                  placeholder={props.blok.form_email}
                />

                <Input
                  type="phone"
                  name="phone"
                  placeholder={props.blok.form_phone}
                />
              </Row>
              <Row>
                <TextArea
                  name="message"
                  placeholder={props.blok.form_message}
                />
              </Row>
              <Row>
                <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="contact_preference"
                    value="by_phone"
                  />
                  <Check />
                  <span>{props.blok.form_contact_preference_phone}</span>
                </CheckboxLabel>
                <CheckboxLabel>
                  <Checkbox
                    type="radio"
                    name="contact_preference"
                    value="by_email"
                  />
                  <Check />
                  <span>{props.blok.form_contact_preference_email}</span>
                </CheckboxLabel>
              </Row>
              <Button>{props.blok.form_button}</Button>
            </FormWrapper>
          </Wrapper>
        </Layout>
      </Section>
    </SbEditable>
  );
};

export default ContactUs;
