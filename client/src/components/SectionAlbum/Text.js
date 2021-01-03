import React from "react";
import { Paragraph } from "../Titles";
import { TextWrapper } from "../Wrappers";

export const Text = () => (
  <TextWrapper>
    <Paragraph text="Albums" size="4rem" weight="bold" />
    <Paragraph text="Some of my memories" weight="light" size="1.1rem" />
  </TextWrapper>
);
