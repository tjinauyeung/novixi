import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  flex: 1;
`

const Avatar = styled.div`
  border-radius: 100%;
  width: 80px;
  height: 80px;
  background-image: ${(props) => `url(${props.image})` || "none"};
  background-color: #f2f2f2;
  background-size: contain;
  background-position: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 40px;
    width: 180px;
    height: 300px;
    border-bottom: 150px solid transparent;
    border-left: 180px solid var(--color-primary-light);

    left: 50%;
    transform: translateX(-50%);
    right: 0;
    z-index: -1;
  }
`;

const Name = styled.h2`
  color: var(--color-primary);
  font-family: var(--font-family-serif);
  font-weight: 400;
`

const Colon = styled.div`
  margin: 15px 0 -15px;
  font-family: var(--font-family-serif);
  font-weight: 900;
  font-size: 30px;
  color: var(--color-primary);
`

const Description = styled.p`
  max-width: 350px;
  width: 100%;
  text-align: center;
  font-weight: 300;
`

const Role = styled.p`
  text-align: center;
  max-width: 350px;
  font-weight: 300;
`

const Testimonial = (props) => (
  <SbEditable content={props.blok}>
    <Wrapper>
      <Avatar image={props.blok.avatar && props.blok.avatar.filename} />
      <Colon>"</Colon>
      <Description>{props.blok.description}</Description>
      <Name>{props.blok.name}</Name>
      <Role>{props.blok.role}</Role>
    </Wrapper>
  </SbEditable>
);

// https://xebia.zoom.us/j/98869715799?pwd=Y3FTM3V2SVBmVGF0RnlSbGJPZFhydz09

export default Testimonial;
