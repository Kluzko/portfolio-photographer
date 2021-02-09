import React from "react";
import PropTypes from "prop-types";
import { DefaultInput, StyledLabel } from "./styles";
const ColorInput = ({ setColor, color, width }) => {
  return (
    <div>
      <StyledLabel>Choose Album name color</StyledLabel>
      <DefaultInput
        type="color"
        width={width}
        onChange={(e) => setColor(e.target.value)}
        value={color || "#000000"}
      />
    </div>
  );
};

ColorInput.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  setColor: PropTypes.func,
};

export default ColorInput;
