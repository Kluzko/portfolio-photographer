import styled, { css } from "styled-components";

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
  margin-top: 1rem;
  padding: 0.7em;
  width: ${({ width }) => (width ? width : "320px")};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

// Add breakpoints for bigger displays
const ImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  top: 10%;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  h1 {
    margin-top: 10px;
    background: none;
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

    object-fit: contain;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    width: 350px;
    height: 350px;
    right: 2%;
    top: 15%;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    width: 300px;
    height: 300px;
    position: relative;

    h1 {
      visibility: 0;
      display: none;
    }
    p {
      font-size: 1rem;
      top: 32%;
      left: 30px;
    }
  }
`;

export {
  Title,
  DefaultInput,
  StyledLabel,
  StyledButton,
  ErrorMsg,
  Dropzone,
  ImageWrapper,
};
