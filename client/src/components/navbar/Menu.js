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
