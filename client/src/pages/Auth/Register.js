import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../../components/Forms/styles";
import { AuthContext } from "../../context/AuthContext";
import { Wrapper } from "../../components/Wrappers";
import { useSendFormData } from "../../hooks/useSendFormData";
import { useRedirectAuthenicatedUser } from "../../hooks/useRedirectAuthenticatedUser";

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
  useRedirectAuthenicatedUser();
  const authContext = useContext(AuthContext);
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  let history = useHistory();

  const handleRegister = async (credentials) => {
    const userInfo = await sendFormData({
      url: `auth/register`,
      success: "Successful registered",
      method: "post",
      formData: credentials,
      auth: true,
    });

    if (userInfo) {
      authContext.setAuthState(userInfo);
      setTimeout(() => {
        history.push("/dashboard");
      }, 1200);
    }
    reset();
  };

  return (
    <Wrapper>
      <AuthFormContainer>
        <h2>Register</h2>
        <AuthStyledForm onSubmit={handleSubmit(handleRegister)}>
          {error && <p className="errorMsg errorMain">{error}</p>}
          {success && <p className="successrMsg errorMsg">{success}</p>}
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
          <SubmitInput
            type="submit"
            value={loading ? "Loading..." : "Register"}
          />
          <p>You have an account?</p>
          <Link to="/login">Login</Link>
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default Register;
