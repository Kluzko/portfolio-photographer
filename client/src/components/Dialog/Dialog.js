import React from "react";
import { DialogContainer } from "./styles";
import { ButtonWrapper } from "../Wrappers";
import Article from "./Article";
import BasicButton from "../Buttons/BasicButton";
import DeleteButton from "../Buttons/DeleteButton";
import DialogButton from "../Buttons/DialogButton";

const articleText = "Are you sure you want delete album";

const Dialog = ({ handleClick }) => {
  return (
    <DialogContainer>
      <DialogButton handleClick={handleClick} text="x" />
      <Article text={articleText} />
      <ButtonWrapper>
        <DeleteButton text="Confirm" />
        <BasicButton text="Abort" />
      </ButtonWrapper>
    </DialogContainer>
  );
};

export default Dialog;
