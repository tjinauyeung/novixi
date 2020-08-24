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

const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 80px;
  right: 80px;
  transition: all 180ms ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 450px) {
    left: 0;
    right: 0;
    bottom: 0;
    padding: 50px 30px;
  }
`;

const Badge = styled.a`
  display: flex;
  border-radius: 500px;
  padding: 18px 32px 18px 18px;
  background: #fff;
  box-shadow: 0 0 200px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  transform: scale(0);
  animation: ${appear} 300ms forwards ease-in-out;
  animation-delay: 3000ms;

  transition: all 180ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 200px rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 450px) {
    padding: 14px 32px 14px 14px;
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

  @media screen and (max-width: 450px) {
    width: 40px;
    height: 40px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 900;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 100%;
  margin: 0;
`;

const ContactBadge = ({ blok }) => (
  <SbEditable content={blok}>
    <Wrapper>
      <Badge href={blok.phone} target="_blank" rel="noreferrer">
        <Avatar image={blok.image && blok.image.filename} />
        <div>
          <Title>{blok.title}</Title>
          <Description>{blok.description}</Description>
        </div>
      </Badge>
    </Wrapper>
  </SbEditable>
);

export default ContactBadge;
