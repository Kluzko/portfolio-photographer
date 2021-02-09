import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrappers";
import styled from "styled-components";

const FourOFourText = styled.p`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.device.phoneMax} {
    font-size: 2.5rem;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    opacity: 0.8;
  }
`;
const FourOFour = () => {
  return (
    <Wrapper
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FourOFourText>404 Page Not found</FourOFourText>
      <StyledLink to="/">Go to Home page</StyledLink>
    </Wrapper>
  );
};

export default FourOFour;
