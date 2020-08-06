import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header";
import Layout from "./layout";
import SbEditable from "storyblok-react";

const Wrapper = styled.div`
  background: linear-gradient(to bottom, var(--color-primary-lighter), #fff);
  padding: 80px 50px 100px;
`;

const Description = styled.p`
  max-width: 750px;
  margin: 40px auto 0;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: stretch;
  width: 100%;
  max-width: 660px;
  padding: 20px;
  margin: auto;
`;

const Input = styled.input`
  padding: 12px;
  font-family: var(--font-family-sans-serif);
  font-size: 14px;
  width: 100%;
  border: 1px solid #222;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  flex: 1;
  width: 100%;

  div {
    flex: 1;
  }

  [type="radio"]:checked,
  [type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  [type="radio"]:checked + label,
  [type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
  }
  [type="radio"]:checked + label:before,
  [type="radio"]:not(:checked) + label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
  }
  [type="radio"]:checked + label:after,
  [type="radio"]:not(:checked) + label:after {
    content: "";
    width: 12px;
    height: 12px;
    background: #f87da9;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  [type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  [type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  text-align: left;
`;

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid #222;
  min-height: 150px;
  font-family: var(--font-family-sans-serif);
  font-size: 14px;
  padding: 12px;

  &:focus {
    outline: none;
  }
`;

const Radio = styled.input``;

const Button = styled.button``;

const Form = (props) => {
  const [status, setStatus] = useState("");

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
      <Wrapper>
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
                <Label>{props.blok.form_name}</Label>
                <Input type="name" name="name" />
              </div>
              <div>
                <Label htmlFor="phone">{props.blok.form_company}</Label>
                <Input type="company" name="company" />
              </div>
            </Row>
            <Row>
              <div>
                <Label>{props.blok.form_email}</Label>
                <Input type="email" name="email" />
              </div>
              <div>
                <Label htmlFor="phone">{props.blok.form_phone}</Label>
                <Input type="phone" name="phone" />
              </div>
            </Row>
            <Row>
              <div>
                <Label htmlFor="message">{props.blok.form_message}</Label>
                <TextArea name="message" />
              </div>
            </Row>
            <Row>
              <div>
                <Label htmlFor="contact_preference">
                  {props.blok.form_contact_preference}
                </Label>
                <Radio
                  type="radio"
                  name="contact_preference_phone"
                  value="by_phone"
                ></Radio>
                <Label htmlFor="contact_preference_phone">
                  {props.blok.form_contact_preference_phone}
                </Label>
                <Radio
                  type="radio"
                  name="contact_preference"
                  value="by_email"
                ></Radio>
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
