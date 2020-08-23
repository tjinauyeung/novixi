import React from "react";
import SbEditable from "storyblok-react";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Wrapper = styled.a`
  display: inline-block;
  position: fixed;
  z-index: 10000;
  bottom: 80px;
  border-radius: 500px;
  right: 80px;
  padding: 18px 32px 18px 18px;
  min-width: 300px;
  background: #fff;
  box-shadow: 0 0 200px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  transform: scale(0);
  animation: ${appear} 300ms forwards ease-in-out;
  animation-delay: 3000ms;

  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 200px rgba(0, 0, 0, 0.8);
  }
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 12px;
  background-color: #f2f2f2;
  background-image: ${(props) => `url(${props.image})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 900;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

const ContactBadge = ({ blok }) => (
  <SbEditable content={blok}>
    <Wrapper href={blok.phone}>
      <Avatar image={blok.image && blok.image.filename} />
      <div>
        <Title>{blok.title}</Title>
        <Description>{blok.description}</Description>
      </div>
    </Wrapper>
  </SbEditable>
);

export default ContactBadge;
