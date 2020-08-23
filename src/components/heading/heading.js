import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 700px;
`;

const Span = styled.span`
  font-size: 42px;
  font-weight: 400;
  line-height: 1.4;
  font-family: var(--font-family-narrow);
  text-transform: uppercase;
  position: relative;
  max-width: 700px;
  transition: all 1500ms ease;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  color: ${props => props.color || "#000"};

  &:after {
    display: block;
    content: "";
    width: 0;
    height: 1px;
    background: ${props => props.color || '#000'};
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    width: 0;
    transform: translateX(100%);
    transition: all 1500ms ease;
  }

  ${(props) =>
    props.visible &&
    `
    &:after {
      width: 50%;
      opacity: 1;
      transform: translateX(100%);
    }
  `}

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Heading = ({ children, color }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
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

  return (
    <Wrapper ref={ref}>
      <Span visible={visible} color={color}>{children}</Span>
    </Wrapper>
  );
};

export default Heading;
