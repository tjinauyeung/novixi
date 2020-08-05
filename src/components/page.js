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
  background: var(--color-primary);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
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
  text-transform: uppercase;
`;

const Footer = styled.footer`
  background: var(--color-primary-dark);
  color: #fff;
  text-align: center;
  padding: 10px;
`;

const Page = (props) => (
  <Wrapper>
    <Styles />
    <NavBar>
      <Layout>
        <Nav>
          <NavItem>Novixi</NavItem>
          <NavItem>Wat wij bieden</NavItem>
          <NavItem>Hoe wij ons onderscheiden</NavItem>
          <NavItem>Referenties</NavItem>
          <NavItem>Contact</NavItem>
        </Nav>
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
    <Footer>{props.blok.footer}</Footer>
  </Wrapper>
);

export default Page;
