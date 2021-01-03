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

export const Background = styled.div`
  position: absolute;
  @media ${({ theme }) => theme.device.tabletXlMin} {
    visibility: hidden;
    display: none;
  }
  img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 900px;
    margin-top: -450px;
    opacity: 0.6;
  }
  left: 3%;
  right: 3%;
`;
