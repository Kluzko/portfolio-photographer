import React, { useRef, useState } from "react";
import styled from "styled-components";
import BurgerIcon from "./BurgerIcon";
// import useOnclickOutside from "react-cool-onclickoutside";
import { useOutsideClick } from "../../hooks";

import MenuLinks from "./MenuLinks";

const MobileMenuWrapper = styled.nav`
  @media ${({ theme }) => theme.device.phoneMin} {
    visibility: 0;
    display: none;
  }
`;
const MobileMenuList = styled.div`
  @media ${({ theme }) => theme.device.phoneMax} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100%;
    text-align: right;
    transform: ${({ open }) =>
      open ? "translateX(-50%)" : "translateX(100%)"};
    display: ${({ open }) => (open ? "" : "none")};
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 10;
    transition: all 0.4s ease-in-out;
    text-align: center;

    @media (${({ theme }) => theme.device.phoneMax}) {
      width: 100%;
    }
    li {
      margin-bottom: 2rem;
    }
    a {
      font-size: 3rem;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: color 0.3s linear;

      @media ${({ theme }) => theme.device.phoneMax} {
        font-size: 2.5rem;
        text-align: center;
        vertical-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }
`;
const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  // on link click change open to false
  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });

  return (
    <MobileMenuWrapper ref={ref}>
      <BurgerIcon open={open} setOpen={setOpen} />
      <MobileMenuList open={open} setOpen={setOpen}>
        <MenuLinks />
      </MobileMenuList>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
