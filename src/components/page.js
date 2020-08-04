import React from "react";
import Components from "./components.js";
import Styles from "../styles";
import styled from "styled-components";
import Layout from "./layout";

const NavBar = styled.header`
  background: var(--color-primary);
`;

const Nav = styled.nav`
  list-style: none;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  color: #fff;
  padding: 20px;
  text-transform: uppercase;
`;

const Page = (props) => (
  <div>
    <Styles />
    <NavBar>
      <Layout>
        <Nav>
          <NavItem>Novixi</NavItem>
          <NavItem>Wat wij bieden</NavItem>
          <NavItem>Hoe wij ons onderscheiden</NavItem>
        </Nav>
      </Layout>
    </NavBar>
    {props.blok.body &&
      props.blok.body.map((blok) =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: blok,
        })
      )}
  </div>
);

export default Page;
