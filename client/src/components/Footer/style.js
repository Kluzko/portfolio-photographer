import styled from "styled-components";

export const FooterWrapper = styled.footer`
  max-height: 8rem;
  background: ${({ theme }) => theme.colors.primary};

  height: 5rem;

  position: block;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    color: white;
    background: transparent;
    margin-left: 4rem;
    margin-right: 4rem;
  }

  & > div:first-child {
    font-size: 0.8rem;
  }
`;
