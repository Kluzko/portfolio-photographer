import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../components/Forms/styles";
import { AuthContext } from "../context/AuthContext";
import { Wrapper } from "../components/Wrappers";
import useHasUnmountedRef from "../hooks/useHasUnmountedRef";

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),

  password: yup
    .string()
    .min(6, "Password should be 6 characters long")
    .required("This field is required"),
});

const Login = () => {
  const authContext = useContext(AuthContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const hasUnmountedRef = useHasUnmountedRef();

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const handleLogin = async (credentials) => {
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        credentials
      );
      authContext.setAuthState(data);
      setError(null);
      history.push("/");
      if (hasUnmountedRef.current) {
        // escape early because component has unmounted
        return;
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const { data } = err.response;
      setError(data.error);
    }

    reset();
  };

  return (
    <Wrapper>
      <AuthFormContainer>
        <h2>Login</h2>
        <AuthStyledForm onSubmit={handleSubmit(handleLogin)}>
          {error && <p className="errorMsg errorMain">{error}</p>}
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
