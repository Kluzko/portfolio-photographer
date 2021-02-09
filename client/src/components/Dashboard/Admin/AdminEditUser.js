import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
  StyledSelect,
} from "../../Forms/styles";
import { Wrapper } from "../../Wrappers";
import { useSendFormData } from "../../../hooks/useSendFormData";
import { apiStates, useApi } from "../../../hooks/useApi";
import Loader from "../../Loader";
import ErrorMessage from "../../ErrorMessage";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(4, "Username should be 4 characters long")
    .required("This field is required"),

  email: yup.string().email().required("This field is required"),

  role: yup.string().oneOf(["user", "bloger"]),
});

const AdminEditUser = () => {
  let history = useHistory();
  const { id } = useParams();

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const {
    data: { state, data },
  } = useApi(`users/${id}`, true);

  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const handleRegister = async (credentials) => {
    const userInfo = await sendFormData({
      url: `users/${id}`,
      success: "Successful edited",
      method: "put",
      formData: credentials,
      auth: true,
    });

    if (userInfo) {
      setTimeout(() => {
        history.push("/dashboard/users");
      }, 1200);
    }
    reset();
  };
  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{data.error || "General Error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const user = data.data;
      return (
        <Wrapper>
          <AuthFormContainer>
            <h2>Edit user</h2>
            <AuthStyledForm onSubmit={handleSubmit(handleRegister)}>
              {error && <p className="errorMsg errorMain">{error}</p>}
              {success && <p className="successrMsg errorMsg">{success}</p>}
              <StyledInput
                type="text"
                placeholder="Username"
                name="username"
                ref={register}
                defaultValue={user.username}
              />
              <p className="errorMsg">{errors.username?.message}</p>
              <StyledInput
                type="email"
                placeholder="Email"
                name="email"
                ref={register}
                defaultValue={user.email}
              />
              <p className="errorMsg">{errors.email?.message}</p>

              <StyledSelect name="role" ref={register}>
                <option value="user">User</option>
                <option value="bloger">Bloger</option>
              </StyledSelect>
              <SubmitInput
                type="submit"
                value={loading ? "Loading..." : "Edit"}
              />
            </AuthStyledForm>
          </AuthFormContainer>
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default AdminEditUser;
