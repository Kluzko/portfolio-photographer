import React from "react";
import {
  StyledContactForm,
  StyledInput,
  StyledSubmit,
  StyledTextArea,
} from "./style";

const ContactForm = () => {
  return (
    <StyledContactForm>
      <StyledInput type="text" placeholder="Title" className="title" />
      <StyledInput type="text" placeholder="E-mail" className="email" />
      <StyledTextArea placeholder="I want to say that..." />
      <StyledSubmit type="submit" value="Submit" />
    </StyledContactForm>
  );
};

export default ContactForm;
