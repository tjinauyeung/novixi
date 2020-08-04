import styled from "styled-components";

const Layout = styled.div`
  max-width: 1280px;
  padding: 20px;
  margin: auto;
  text-align: ${props => props.start ? "left" : "center"};
`;

export default Layout;
