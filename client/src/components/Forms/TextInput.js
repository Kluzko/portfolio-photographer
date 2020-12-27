import React from "react";
import { DefaultInput, StyledLabel } from "./styles";
import PropTypes from "prop-types";
const TextInput = ({ setValue, width, children, placeholder }) => {
  return (
    <div>
      <StyledLabel>{children}</StyledLabel>
      <DefaultInput
        type="text"
        placeholder={placeholder || "Enter value"}
        width={width}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

TextInput.propTypes = {
  setValue: PropTypes.func.isRequired,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  placeholder: PropTypes.string,
};

export default TextInput;
