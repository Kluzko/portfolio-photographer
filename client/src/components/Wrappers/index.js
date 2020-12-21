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
