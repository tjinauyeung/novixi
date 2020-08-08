import React, { useRef, useState, useEffect } from "react";
import SbEditable from "storyblok-react";
import Components from "./components";
import styled, { keyframes, css } from "styled-components";
import Header from "./header";
import Layout from "./layout";

const Container = styled.div`
  background: #fff;
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 100px 0;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Grid = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 60px;

  > * {
    opacity: 0;
  }

  ${(props) =>
    props.visible &&
    css`
      > * {
        animation: ${fadeIn} forwards 900ms ease-in-out;
      }

      > *:nth-child(2) {
        animation-delay: 300ms;
      }

      > *:nth-child(3) {
        animation-delay: 600ms;
      }
    `}
`;

const ThreeColumnSection = (props) => {
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
    <SbEditable content={props.blok}>
      <div ref={ref} />
      <Container id={props.blok.id}>
        <Layout>
          <Wrapper>
            <Header>{props.blok.title}</Header>
            <Grid visible={visible}>
              {props.blok.columns.map((blok) =>
                React.createElement(Components(blok.component), {
                  key: blok._uid,
                  blok: blok,
                })
              )}
            </Grid>
          </Wrapper>
        </Layout>
      </Container>
    </SbEditable>
  );
};

export default ThreeColumnSection;
