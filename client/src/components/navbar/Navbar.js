import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Logo, StyledNavbar } from "./style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo>
        <Link to="/">Kluzniak</Link>
      </Logo>
      <Menu />
    </StyledNavbar>
  );
};
export default Navbar;
