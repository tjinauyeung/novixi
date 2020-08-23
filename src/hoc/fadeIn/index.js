import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  transition: all 1200ms ease-in-out;
  transform: translateY(${(props) => (props.visible ? 0 : "10px")});
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const fadeIn = (Component) => ({ children, ...props }) => {
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
    <Wrapper ref={ref} visible={visible}>
      <Component {...props}>{children}</Component>
    </Wrapper>
  );
};

export default fadeIn;
