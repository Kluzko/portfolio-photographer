import React, { useRef, useState } from "react";
import BurgerIcon from "./BurgerIcon";

import { useLinkClick } from "../../hooks/useLinkClik";

import MenuLinks from "./MenuLinks";
import { MobileMenuList, MobileMenuWrapper } from "./style";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  // on link click change open to false
  useLinkClick(ref, () => {
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
