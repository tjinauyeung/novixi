import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Icon from "../../../icons/quotemark";
import fadeIn from '../../../hoc/fadeIn';

const Wrapper = styled.div`
  min-height: 450px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;

const Description = styled.p`
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 36px;
  line-height: 1.3;
  max-width: 800px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    text-align: center;
    font-weight: 300;
    font-size: 28px;
    font-family: var(--font-family-serif);
    font-style: italic;
    flex: 1;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 450px) {
      font-size: 24px;
    }
  }
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Avatar = styled.div`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  margin-right: 20px;
  background-image: ${(props) => `url(${props.image})` || "none"};
  background-color: #f2f2f2;
  background-size: contain;
  background-position: center;

  @media screen and (max-width: 450px) {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
`;

const Role = styled.p`
  font-weight: 300;
  margin: 0;

  @media screen and (max-width: 450px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

const Name = styled.h2`
  font-family: var(--font-family-serif);
  font-weight: 400;
  margin: 0;

  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

const Quotemark = styled.em`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Testimonial = ({blok}) => (
  <SbEditable content={blok}>
    <Wrapper>
      <Description>
        <Quotemark>
          <Icon fill="var(--color-primary-lighter)" />
        </Quotemark>
        <span>{blok.description}</span>
      </Description>
      <Person>
        <Avatar image={blok.avatar && blok.avatar.filename} />
        <div>
          <Name>{blok.name}</Name>
          <Role>{blok.role}</Role>
        </div>
      </Person>
    </Wrapper>
  </SbEditable>
);

export default fadeIn(Testimonial);
