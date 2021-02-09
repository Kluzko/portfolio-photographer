import styled, { css } from "styled-components";

const mainStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  font-size: ${({ size }) => (size ? size : "3rem")};
  background-color: transparent;
`;

export const FormTitle = styled.h1`
  color: #705b5b;
  font-size: 2.5rem;
  letter-spacing: 3px;
  margin-bottom: 3rem;
`;

export const StyledMainHeader = styled.h1`
  ${mainStyles}

  @media ${({ theme }) => theme.device.laptopMax} {
    &:first-child {
      font-size: 2.25rem;
    }
    &:not(:first-child) {
      font-size: 4.5rem;
    }
  }

  @media ${({ theme }) => theme.device.phoneMax} {
    &:first-child {
      font-size: 1.75rem;
    }
    &:not(:first-child) {
      font-size: 3.75rem;
    }
  }
  @media ${({ theme }) => theme.device.phoneSmMax} {
    &:not(:first-child) {
      font-size: 3rem;
    }
  }
`;

export const StyledPargraph = styled.p`
  ${mainStyles}

  @media ${({ theme }) => theme.device.phoneSmMax} {
    &:first-child {
      font-size: 3rem;
    }
  }
`;
