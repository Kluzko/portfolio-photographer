import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../components/Forms/styles";
import { Wrapper } from "../components/Wrappers";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be 4 characters long")
    .required("This field is required"),

  email: yup.string().email().required("This field is required"),

  password: yup
    .string()
    .min(6, "Password should be 6 characters long")
    .required("This field is required"),

  password_repeat: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("password")], "Both password need to be the same"),
  }),
});

const Register = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <AuthFormContainer>
        <h2>Register</h2>
        <AuthStyledForm onSubmit={handleSubmit(handleRegister)}>
          <StyledInput
            type="text"
            placeholder="Username"
            name="username"
            ref={register}
          />
          <p className="errorMsg">{errors.username?.message}</p>
          <StyledInput
            type="email"
            placeholder="Email"
            name="email"
            ref={register}
          />
          <p className="errorMsg">{errors.email?.message}</p>
          <StyledInput
            name="password"
            type="password"
            placeholder="Password"
            ref={register}
          />
          <p className="errorMsg">{errors.password?.message}</p>
          <StyledInput
            name="password_repeat"
            type="password"
            placeholder="Repeat password"
            ref={register}
          />
          <p className="errorMsg">{errors.password_repeat?.message}</p>

          <SubmitInput type="submit" value="Register" />
          <p>You have an account?</p>
          <Link to="/login">Login</Link>
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default Register;
