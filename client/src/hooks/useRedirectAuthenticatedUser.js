import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const useRedirectAuthenicatedUser = () => {
  let history = useHistory();
  const authProvider = useContext(AuthContext);

  if (authProvider.isAuthenticated()) return history.push("/dashboard");
};
