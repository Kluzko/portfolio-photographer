import React from "react";
import { Link } from "react-router-dom";
import { FooterWrapper } from "./style";

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        Made with{" "}
        <span role="img" aria-label="footer-heart">
          {" "}
          ❤️{" "}
        </span>{" "}
        by Jakub Kluźniak
      </div>
      <div>
        <Link to="/">Go back</Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
