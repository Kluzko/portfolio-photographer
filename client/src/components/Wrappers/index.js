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
