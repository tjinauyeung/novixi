import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: inline-block;
  color: #fff;
  padding: 18px 0;
  margin: 0 20px;
  cursor: pointer;
  position: relative;
  font-family: var(--font-family-narrow);
  text-transform: uppercase;
  font-size: 20px;

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

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 0 10px;
  }
`;

const to = (id) => (e) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const NavItem = ({ blok }) => (
  <Wrapper onClick={to(blok.to)}>{blok.label}</Wrapper>
);

export default NavItem;
