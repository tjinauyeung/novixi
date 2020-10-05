import React from "react";
import SbEditable from "storyblok-react";
import styled from "styled-components";
import Layout from "../../components/layout";
import SbComponents from "../../sb-components";

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  background: var(--color-primary);
  padding: 0 20px;
`;

const FlexEnd = styled.div`
  display: flex;
  align-items: center;
`;

const NavList = styled.nav`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  width: 110px;
  height: 42px;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 20px 0;

  @media (max-width: 450px) {
    max-width: 80px;
    margin: 20px 0;
  }
`;

const Lang = styled.div`
  cursor: pointer;
  margin-left: 20px;
  width: 30px;
  height: 20px;
  background-image: ${(props) => `url(${props.image.filename})`};
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 4px;
`;

const Nav = ({ blok }) => (
  <Wrapper>
    <Layout>
      <SbEditable content={blok}>
        <Header>
          <Logo href="#home" src={blok.logo && blok.logo.filename} />
          <FlexEnd>
            <NavList>
              {blok.links.map((link) =>
                React.createElement(SbComponents(link.component), {
                  key: link._uid,
                  blok: link,
                })
              )}
            </NavList>
            <a href={blok.path}>
              <Lang image={blok.language} />
            </a>
          </FlexEnd>
        </Header>
      </SbEditable>
    </Layout>
  </Wrapper>
);

export default Nav;
