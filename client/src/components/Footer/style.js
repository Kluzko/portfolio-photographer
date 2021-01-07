import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-height: 8rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  height: 7rem;
  display: flex;
  align-items: center;
  padding-left: 3rem;
`;
