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
  margin-top: 5%;
  margin-left: 10%;

  @media ${({ theme }) => theme.device.phoneMax} {
    margin-top: 10%;
    margin-left: 20%;
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
