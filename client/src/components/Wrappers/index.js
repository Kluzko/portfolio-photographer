import styled from "styled-components";

export const CartWrapper = styled.div`
  margin-top: 5%;
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  overflow: none;
  justify-items: center;
  grid-gap: 30px;
`;

export const FormWrapper = styled.div`
  margin-top: 15%;
  margin-left: 10%;
  height: 90vh;

  @media ${({ theme }) => theme.device.phoneMax} {
    margin-top: 10%;
    margin-left: 20%;
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    height: 105vh;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  padding-top: 20px;
`;

export const TextWrapper = styled.div`
  line-height: 1.4;
  position: absolute;
  top: ${({ top }) => (top ? top : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  z-index: 100;
  background: transparent;
  display: flex;
  flex-flow: column;
`;

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  overflow-x: none;
  position: relative;
  height: 95vh;
  @media ${({ theme }) => theme.device.tabletXlMax} {
    height: 70vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: transparent;
`;

export const PreviewWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    max-width: 100%;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    right: 2%;
    top: 15%;
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    width: 300px;
    position: relative;
    height: 300px;
    margin-top: 20px;
  }
`;
