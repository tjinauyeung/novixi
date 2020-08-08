import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./header";
import Layout from "./layout";
import SbEditable from "storyblok-react";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, var(--color-primary-lighter), #fff);
  padding: 80px 50px 100px;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 40px auto 0;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  max-width: 720px;
  padding: 50px 0;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  flex: 1;
  width: 100%;

  div {
    flex: 1;
    position: relative;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  text-align: left;
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

const Form = (props) => {
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
      <Wrapper id="contact">
        <div ref={ref} />
        <Layout>
          <Header>{props.blok.title}</Header>
          <Description>{props.blok.description}</Description>
          <FormWrapper
            onSubmit={submit}
            action="https://formspree.io/xoqkrrlk"
            method="POST"
          >
            <Row>
              <div>
                <Input
                  htmlFor="name"
                  type="name"
                  name="name"
                  focus={focus}
                  placeholder={props.blok.form_name}
                />
              </div>
              <div>
                <Input
                  type="company"
                  name="company"
                  placeholder={props.blok.form_company}
                />
              </div>
            </Row>
            <Row>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder={props.blok.form_email}
                />
              </div>
              <div>
                <Input
                  type="phone"
                  name="phone"
                  placeholder={props.blok.form_phone}
                />
              </div>
            </Row>
            <Row>
              <div>
                <TextArea
                  name="message"
                  placeholder={props.blok.form_message}
                />
              </div>
            </Row>
            <Row>
              <div>
                <Label htmlFor="contact_preference">
                  {props.blok.form_contact_preference}
                </Label>
                <input
                  type="radio"
                  name="contact_preference_phone"
                  value="by_phone"
                />
                <Label htmlFor="contact_preference_phone">
                  {props.blok.form_contact_preference_phone}
                </Label>
                <input
                  type="radio"
                  name="contact_preference"
                  value="by_email"
                />
                <Label htmlFor="contact_preference_email">
                  {props.blok.form_contact_preference_email}
                </Label>
              </div>
            </Row>
            <Button>{props.blok.form_button}</Button>
          </FormWrapper>
        </Layout>
      </Wrapper>
    </SbEditable>
  );
};

export default Form;
