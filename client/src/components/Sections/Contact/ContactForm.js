import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { SERVER_API } from "../../../config";
import * as yup from "yup";

import {
  StyledContactForm,
  StyledInput,
  StyledSubmit,
  StyledTextArea,
} from "./style";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  title: yup.string().min(3).max(18).required(),
  message: yup.string().min(5).max(150).required(),
});

const sendData = async (data) => {
  try {
    await axios.post(`${SERVER_API}sendMail`, data);
  } catch (err) {
    console.log(err);
  }
};

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const printValues = (data) => {
    sendData(data);

    reset();
  };

  return (
    <StyledContactForm onSubmit={handleSubmit(printValues)}>
      <div className="email">
        <StyledInput
          type="text"
          placeholder="E-mail"
          name="email"
          ref={register}
        />
        <p
          style={{
            color: "red",
          }}
        >
          {errors.email?.message}
        </p>
      </div>

      <div className="title">
        <StyledInput
          type="text"
          placeholder="Title"
          name="title"
          ref={register}
        />
        <p
          style={{
            color: "red",
          }}
        >
          {errors.title?.message}
        </p>
      </div>

      <div className="message">
        <StyledTextArea
          placeholder="I want to say that..."
          name="message"
          ref={register}
        />
        <p
          style={{
            color: "red",
          }}
        >
          {errors.message?.message}
        </p>
      </div>

      <StyledSubmit type="submit" value="Submit" />
    </StyledContactForm>
  );
};

export default ContactForm;
