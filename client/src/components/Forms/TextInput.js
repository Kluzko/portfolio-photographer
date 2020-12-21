import React from "react";
import { DefaultInput, StyledLabel } from "./styles";

const TextInput = ({ setValue, width, children, placeholder }) => {
  return (
    <div>
      <StyledLabel>{children}</StyledLabel>
      <DefaultInput
        type="text"
        placeholder={placeholder}
        width={width}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
