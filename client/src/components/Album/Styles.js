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

const Dropzone = styled.div`
  height: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border: ${({ isDragActive }) =>
    isDragActive ? "2px solid purple" : "2px dashed salmon"};
  display: flex;
  width: 11rem;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const StyledButton = styled.button`
  margin-top: 3rem;
  padding: 0.7em;
  width: ${({ width }) => (width ? width : "320px")};
  color: #007cb3;
  border: 1px solid #007cb3;
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 20%;
  right: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  Title {
    text-align: center;
  }
  p {
    font-size: 1.5rem;
    position: absolute;
    top: 35%;
    left: 50px;
    z-index: 10;
    font-weight: bold;
    background: transparent;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

export {
  Wrapper,
  Title,
  DefaultInput,
  StyledLabel,
  StyledButton,
  ErrorMsg,
  Dropzone,
  ImageWrapper,
};
