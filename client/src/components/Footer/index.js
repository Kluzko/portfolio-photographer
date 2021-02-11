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
        by{" "}
        <a
          href="https://github.com/Kluzko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jakub Kluźniak
        </a>
      </div>
      <div>
        <Link to="/">Go back</Link>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
