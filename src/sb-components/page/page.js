import React from "react";
import styled from "styled-components";
import SbComponents from "../../sb-components";
import Styles from "../../styles";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Body = styled.main`
  flex: 1;
`;

const Page = (props) => {
  return (
    <Wrapper>
      <Styles />
      <Body>
        {props.blok.body &&
          props.blok.body.map((blok) =>
            React.createElement(SbComponents(blok.component), {
              key: blok._uid,
              blok: blok,
            })
          )}
      </Body>
    </Wrapper>
  );
};

export default Page;
