import styled from "styled-components";
import { BasicButton } from "../Buttons";

export const DialogContainer = styled.div`
  border: 2px solid #000;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  background: black;
  text-align: center;
  position: relative;
  z-index: 10;
  margin-top: -5vh;
`;

export const DialogButton = styled(BasicButton)`
  background: black;
`;
