import React from "react";

import { bool, func } from "prop-types";
import { StyledBurger } from "./style";

const BurgerIcon = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
BurgerIcon.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default BurgerIcon;
