import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.7em;
  width: ${({ width }) => (width ? width : "320px")};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;
const baseButtonStyles = css`
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: #fff;
`;

export const BasicButton = styled.button`
  ${baseButtonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  outline: none;
  &:hover {
    background-color: #808080;
  }
`;

export const StyledDeleteButton = styled.button`
  ${baseButtonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: red;
  }
`;

export const StyledDialogButton = styled.button`
  ${baseButtonStyles}
  background-color: black;
  position: absolute;
  right: 10px;

  &:hover {
    background-color: red;
  }
`;

export const StyledLinkButton = styled.button`
  ${baseButtonStyles}
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  width: 150px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
