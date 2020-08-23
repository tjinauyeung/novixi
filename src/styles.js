import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    --color-primary: #0094bb;
    --color-primary-light: #c7e8ee;
    --color-primary-lighter: #e2f5f8;
    --color-primary-dark: #2c6b90;
    --color-secondary: #ffa800;
    --color-bg-light: #EAF1F3;
    --color-bg-dark: #0094BB;

    --font-family-sans-serif: 'Open Sans', sans-serif;
    --font-family-serif: 'Poly', serif;
    --font-family-narrow: 'Pathway Gothic One', serif;
  }


  html {
    font-family: var(--font-family-sans-serif);
    background: var(--color-primary);
  }

  p {
    font-size: 18px;
    line-height: 1.8;
    font-weight: 300;

    @media screen and (max-width: 380px) {
      font-size: 16px;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }

  a,
  a:hover,
  a:visited,
  a:focus {
    outline: none;
    color: inherit;
    text-decoration: none;
  }
`

export default Styles;
