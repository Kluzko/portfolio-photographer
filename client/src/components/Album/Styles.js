import styled, { css } from "styled-components";

const Wrapper = styled.div`
  margin-top: 5%;
  margin-left: 10%;
`;

const Title = styled.h1`
  color: #705b5b;
  font-size: 2.5rem;
  letter-spacing: 3px;
  margin-bottom: 3rem;
`;

// error msg
const ErrorMsg = styled.p`
  color: #ff9494;
`;
// base Styles for input components
const baseInputStyles = css`
  border: 2px solid #b7acac;
  padding: 0.7em;
  width: ${(width) => (width ? width : "400px")};
  margin-top: 1.5rem;
`;
// Label
const StyledLabel = styled.label`
  width: 100%;
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const DefaultInput = styled.input`
  ${baseInputStyles}
`;

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 0.7em;
  width: ${({ width }) => (width ? width : "320px")};
  color: #007cb3;
  border: 1px solid #007cb3;
  cursor: pointer;
`;

export { Wrapper, Title, DefaultInput, StyledLabel, StyledButton, ErrorMsg };