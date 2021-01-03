import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Logo = styled.div`
  margin-top: 1em;
  margin-left: 10%;
  z-index: 100;
  a {
    font-weight: bold;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.primary};
  }
`;

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
