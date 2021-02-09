import styled, { css } from "styled-components";

export const Dropzone = styled.div`
  height: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border: ${({ isDragActive }) =>
    isDragActive ? "2px solid purple" : "2px dashed salmon"};
  display: flex;
  width: 13rem;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

const baseInputStyles = css`
  border: 2px solid #b7acac;
  padding: 0.7em;
  width: ${(width) => (width ? width : "400px")};
  margin-top: 1.5rem;
`;
export const DefaultInput = styled.input`
  ${baseInputStyles}
`;

export const StyledLabel = styled.label`
  width: 100%;
  display: inline-block;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const AuthFormContainer = styled.div`
  max-width: 500px;
  width: 60vw;
  background: white;
  height: 600px;
  margin-top: 10%;
  display: flex;
  box-shadow: 1px 5px 26px 17px rgba(255, 255, 255, 0.46);
  border-radius: 14px;
  align-items: center;
  flex-direction: column;
  @media ${({ theme }) => theme.device.phoneMax} {
    width: 80vw;
  }

  h2 {
    background: inherit;
    margin-top: 1rem;
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const AuthStyledForm = styled.form`
  margin-top: 20%;
  background: inherit;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  .errorMsg {
    margin-top: -1.5rem;
    color: ${({ theme }) => theme.colors.error};
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 85%;
    width: 60%;
  }
  .successrMsg {
    text-align: center;
    background: green;
    color: white;
  }
  .errorMain {
    text-align: center;
    background: ${({ theme }) => theme.colors.error};
    color: white;
  }

  p {
    margin-top: 15%;
    color: grey;
  }
  p,
  a {
    background: inherit;
    margin-bottom: 10px;
    font-size: 90%;
  }
  a {
    margin-bottom: 50px;
    font-weight: bold;
  }
  .passwordForgot {
    margin-top: 1rem;
    font-weight: bold;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 60%;

  margin-bottom: 2rem;
  height: 3rem;
  background: inherit;
`;

export const SubmitInput = styled.input`
  width: 40%;
  height: 2rem;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(4px);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.99);
    box-shadow: 2px 2px 20px 0px rgba(50, 50, 50, 0.75);
  }
`;

export const StyledSelect = styled.select`
  margin-bottom: 2rem;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 30%;
  font-weight: bold;
`;
