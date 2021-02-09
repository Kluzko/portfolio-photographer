import React from "react";
import { StyledLoginButton } from "./style";
import { useHistory } from "react-router-dom";

const LoginButton = ({ auth }) => {
  const history = useHistory();

  const logout = () => {
    auth.logout();
  };
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <StyledLoginButton onClick={auth.isAuthenticated() ? logout : handleLogin}>
      {auth.isAuthenticated() ? "Logout" : "Login"}
    </StyledLoginButton>
  );
};

export default LoginButton;
