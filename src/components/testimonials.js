import React from "react";
import SbEditable from "storyblok-react";
import Components from "./components";
import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Testimonials = (props) => (
  <SbEditable content={props.blok}>
    <Grid>
      {props.blok.columns.map((blok) =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: blok,
        })
      )}
    </Grid>
  </SbEditable>
);

export default Testimonials;
