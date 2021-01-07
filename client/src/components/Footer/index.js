import React from "react";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      Made with{" "}
      <span role="img" aria-label="footer-heart">
        {" "}
        ❤️{" "}
      </span>{" "}
      by Jakub Kluźniak
    </FooterWrapper>
  );
};

export default Footer;
