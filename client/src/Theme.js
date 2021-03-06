import React from "react";
import { ThemeProvider } from "styled-components";
// theme for website

const breakPoints = {
  smallMobile: "400px",
  mobile: "599.98px",
  tablet: "767.98px",
  tabletXl: "1099.98px",
  laptop: "1399.98px",
};

const theme = {
  colors: {
    background: "#E5E5E5",
    primary: "#007CB3",
    primaryHover: "#0039b3",
    error: "#ED4337",
  },
  device: {
    phoneSmMax: `(max-width: ${breakPoints.smallMobile})`,
    phoneMax: `(max-width: ${breakPoints.mobile})`,
    phoneMin: `(min-width: ${breakPoints.mobile})`,
    tabletMax: `(max-width: ${breakPoints.tablet})`,
    tabletXlMax: `(max-width: ${breakPoints.tabletXl})`,
    tabletXlMin: `(min-width: ${breakPoints.tabletXl})`,
    laptopMax: `(max-width: ${breakPoints.laptop})`,
  },
  maxWidth: "1470px",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
