import React from "react";
import MenuLinks from "./MenuLinks";
import MobileMenu from "./MobileMenu";
import { StyledMenu } from "./style";

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
