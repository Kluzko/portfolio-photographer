import React, { useContext } from "react";
import { Wrapper } from "../components/Wrappers";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const auth = useContext(AuthContext);
  const { username, email } = auth.authState.userInfo;

  return (
    <Wrapper>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </Wrapper>
  );
};

export default Dashboard;
