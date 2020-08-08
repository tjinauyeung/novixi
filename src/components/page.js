import React from "react";
import Components from "./components.js";
import Styles from "../styles";
import styled from "styled-components";
import Layout from "./layout";

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
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
  display: inline-block;
  color: #fff;
  padding: 20px 0;
  margin: 0 20px;
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    width: 0;
    transform: translateX(100%);
    background: #fff;
    height: 1px;
    opacity: 0;
    transition: all 300ms ease;
  }

  &:hover:after {
    width: 50%;
    opacity: 1;
    transform: translateX(100%);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const Img = styled.img`
  max-width: 140px;
`;

const to = (id) => (e) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const Page = (props) => (
  <Wrapper>
    <Styles />
    <NavBar>
      <Layout>
        <Header>
          <Img src={props.blok.logo && props.blok.logo.filename} />
          <Nav>
            <NavItem onClick={to(props.blok.nav_item_1)}>
              {props.blok.nav_item_1_label}
            </NavItem>
            <NavItem onClick={to(props.blok.nav_item_2)}>
              {props.blok.nav_item_2_label}
            </NavItem>
            <NavItem onClick={to(props.blok.nav_item_3)}>
              {props.blok.nav_item_3_label}
            </NavItem>
            <NavItem onClick={to(props.blok.nav_item_4)}>
              {props.blok.nav_item_4_label}
            </NavItem>
            <NavItem onClick={to(props.blok.nav_item_5)}>
              {props.blok.nav_item_5_label}
            </NavItem>
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
