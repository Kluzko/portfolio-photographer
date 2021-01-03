import styled, { css } from "styled-components";

const mainStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ weight }) => (weight ? weight : "normal")};
  font-size: ${({ size }) => (size ? size : "3rem")};
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
`;

export const StyledPargraph = styled.p`
  ${mainStyles}
`;
