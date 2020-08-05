import React from "react";
import Components from "./components.js";
import Styles from "../styles";
import styled from "styled-components";
import Layout from "./layout";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.main`
  flex: 1;
`;

const NavBar = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  font-family: var(--font-family-narrow);
  z-index: 100;
  background: var(--color-primary);
`;

const Nav = styled.nav`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const NavItem = styled.li`
  color: #fff;
  padding: 20px;
  font-size: 18px;
  text-transform: uppercase;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0;
`

const Img = styled.img`
  max-width: 150px;
`

const Page = (props) => (
  <Wrapper>
    <Styles />
    <NavBar>
      <Layout>
        <Header>
        <Img src={props.blok.logo && props.blok.logo.filename} />
        <Nav>
          <NavItem>Novixi</NavItem>
          <NavItem>Wat wij bieden</NavItem>
          <NavItem>Hoe wij ons onderscheiden</NavItem>
          <NavItem>Referenties</NavItem>
          <NavItem>Contact</NavItem>
        </Nav>
        </Header>
      </Layout>
    </NavBar>
    <Body>
      {props.blok.body &&
        props.blok.body.map((blok) =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
    </Body>
  </Wrapper>
);

export default Page;
