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
