import React from "react";
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

export default ColorInput;
