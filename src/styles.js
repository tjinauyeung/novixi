import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-family: var(--font-family-sans-serif);
  }

  :root {
    --color-primary: #0094bb;
    --color-primary-light: #c7e8ee;
    --color-primary-lighter: #e2f5f8;
    --color-secondary: #ffa800;

    --font-family-sans-serif: 'Open Sans', sans-serif;
    --font-family-serif: 'Poly', serif;
  }

  p {
    line-height: 1.6;
  }
`

export default Styles;
