import styled from "styled-components";

const Header = styled.span`
  display: inline-block;
  font-size: 36px;
  font-weight: 400;
  font-family: var(--font-family-serif);
  text-align: center;
  position: relative;
  max-width: 700px;

  &:after {
    position: absolute;
    right: 0;
    content: "";
    display: block;
    width: 50%;
    height: 1px;
    background: var(--color-primary);
  }
`;

export default Header;
