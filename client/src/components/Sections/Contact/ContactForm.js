import React, { useState } from "react";

import {
  StyledContactForm,
  StyledInput,
  StyledSubmit,
  StyledTextArea,
} from "./style";

const sendData = async (data) => {
  console.log(data);

  try {
    const res = await fetch("http://localhost:5000/sendMail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await res.json();
    console.log(info);
  } catch (err) {
    console.log(err);
  }
};

const ContactForm = () => {
  const [contact, setContact] = useState({
    email: "kluzniakkuba@gmail.com",
    title: "Moj tytul",
    message: "bardzo dlugi opis super ze sie udalo",
  });

  const clearValues = () => {
    setContact({
      email: "",
      title: "",
      message: "",
    });
  };
  const printValues = (e) => {
    e.preventDefault();
    const { email, title, message } = contact;

    const data = {
      email,
      title,
      message,
    };
    sendData(data);

    clearValues();
  };

  const updateField = (e) => {
    setContact({
      ...contact,
      // take value from name val and find it in useState
      [e.target.name]: e.target.value,
    });
  };
  return (
    <StyledContactForm onSubmit={printValues}>
      <StyledInput
        type="text"
        placeholder="Title"
        className="title"
        name="title"
        required
        value={contact.title}
        onChange={updateField}
        tabindex="0"
      />
      <StyledInput
        type="email"
        placeholder="E-mail"
        className="email"
        name="email"
        value={contact.email}
        required
        onChange={updateField}
        tabindex="0"
      />
      <StyledTextArea
        placeholder="I want to say that..."
        name="message"
        required
        value={contact.message}
        onChange={updateField}
        tabindex="0"
      />
      <StyledSubmit type="submit" tabindex="0" value="Submit" />
    </StyledContactForm>
  );
};

export default ContactForm;
