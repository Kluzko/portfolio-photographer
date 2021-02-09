import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useSendFormData } from "../../hooks/useSendFormData";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../Forms/styles";

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),

  username: yup
    .string()
    .min(4, "Username should be 4 characters long")
    .required("This field is required"),
});

const DashboardDetails = () => {
  const auth = useContext(AuthContext);
  const { username, email } = auth.authState.userInfo;
  const [errorMsg, setErrorMsg] = useState(null);

  const {
    sendFormData,
    data: { loading, error },
  } = useSendFormData();

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = async (info) => {
    setErrorMsg("");
    const changedUsername = info.username;
    const changedEmail = info.email;

    if (username === changedUsername && email === changedEmail) {
      setErrorMsg("No values changed");
      return;
    } else {
      const data = await sendFormData({
        formData: info,
        url: "auth/update-details",
        method: "put",
        auth: true,
      });

      const { email, role, username, _id } = data.user;

      const userData = {
        email,
        role,
        username,
        _id,
      };

      auth.setUserState(userData);
    }
  };

  return (
    <AuthFormContainer>
      <AuthStyledForm onSubmit={handleSubmit(handleUpdate)}>
        {(errorMsg || error) && (
          <p className="errorMsg errorMain">{errorMsg || error}</p>
        )}
        <StyledInput
          type="text"
          placeholder="Username"
          name="username"
          defaultValue={username}
          ref={register}
        />
        <p className="errorMsg">{errors.username?.message}</p>
        <StyledInput
          type="email"
          placeholder="Email"
          name="email"
          ref={register}
          defaultValue={email}
        />
        <p className="errorMsg">{errors.email?.message}</p>

        <SubmitInput
          type="submit"
          value={loading ? "Loading..." : "Change Details"}
        />
      </AuthStyledForm>
    </AuthFormContainer>
  );
};

export default DashboardDetails;
