import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-height: 8rem;
  background: ${({ theme }) => theme.colors.primary};

  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
  & > div {
    color: white;
    background: transparent;
  }
`;
