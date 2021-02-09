import styled from "styled-components";

export const ErrorMsg = styled.p`
  font-size: ${({ font }) => (font ? font : "1.5rem")};
  color: ${({ theme }) => theme.colors.error};
  width: 100%;
  background: transparent;
`;

export const Center = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;
