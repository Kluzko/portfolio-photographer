import React from "react";
import styled from "styled-components";
import MenuLinks from "./MenuLinks";
import MobileMenu from "./MobileMenu";

const StyledMenu = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.phoneMax} {
    display: none;
    visibility: 0;
  }
  z-index: 5;
  background: transparent;

  li {
    margin-top: 1.4em;
    margin-right: 1.9em;
    background: transparent;
  }
  a {
    font-weight: 400;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    a {
      color: ${({ theme }) => theme.colors.primaryHover};
      transition: all 0.2s ease-in;
    }
    li:hover > a {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      padding: 3px;
    }
  }
`;

const Menu = () => {
  return (
    <>
      <StyledMenu>
        <MenuLinks />
      </StyledMenu>
      <MobileMenu />
    </>
  );
};

export default Menu;
