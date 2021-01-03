import styled from "styled-components";

export const SliderWrapper = styled.div`
  position: absolute;
  top: 150px;
  width: 40%;
  height: "500px";
  right: 20px;
  @media ${({ theme }) => theme.device.tabletXlMax} {
    visibility: hidden;
    display: none;
  }
`;

export const Dot = styled.span`
  height: 85px;
  width: 85px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  z-index: -1;
  display: inline-block;
  position: absolute;
  top: -50px;
  left: -35px;
`;
