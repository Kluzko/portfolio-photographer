import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSendFormData } from "../../hooks/useSendFormData";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../../components/Forms/styles";
import { AuthContext } from "../../context/AuthContext";
import { Wrapper } from "../../components/Wrappers";
import { useRedirectAuthenicatedUser } from "../../hooks/useRedirectAuthenticatedUser";

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),

  password: yup
    .string()
    .min(6, "Password should be 6 characters long")
    .required("This field is required"),
});

const Login = () => {
  // if user is authenticated he cant get to login
  useRedirectAuthenicatedUser();
  const authContext = useContext(AuthContext);
  let history = useHistory();
  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLogin = async (credentials) => {
    const userInfo = await sendFormData({
      url: `auth/login`,
      success: "Successful login",
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
        <h2>Login</h2>
        <AuthStyledForm onSubmit={handleSubmit(handleLogin)}>
          {error && <p className="errorMsg errorMain">{error}</p>}
          {success && <p className="successrMsg errorMsg">{success}</p>}
          <StyledInput
            type="email"
            placeholder="Email"
            name="email"
            ref={register}
          />
          <p className="errorMsg">{errors.email?.message}</p>
          <StyledInput
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
          <p className="errorMsg">{errors.password?.message}</p>
          <SubmitInput type="submit" value={loading ? "Loading..." : "Login"} />
          <Link to="/passwordForgot" className="passwordForgot">
            I forgot password
          </Link>
          <p>Doesnt`t have account yet?</p>
          <Link to="/register">Register</Link>
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default Login;
