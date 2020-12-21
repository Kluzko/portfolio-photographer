import styled from "styled-components";

export const ErrorMsg = styled.p`
  font-size: ${({ font }) => (font ? font : "1.5rem")};
  color: ${({ theme }) => theme.colors.error};
`;

export const Center = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
