import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../../components/Forms/styles";
import { Wrapper } from "../../components/Wrappers";
import { AuthContext } from "../../context/AuthContext";
import { useSendFormData } from "../../hooks/useSendFormData";
import { useRedirectAuthenicatedUser } from "../../hooks/useRedirectAuthenticatedUser";

const schema = yup.object().shape({
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

const ResetPassword = () => {
  useRedirectAuthenicatedUser();
  const authContext = useContext(AuthContext);
  let history = useHistory();
  const { resettoken } = useParams();
  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });
  const handleForm = async (info) => {
    const userInfo = await sendFormData({
      url: `auth/reset-password/${resettoken}`,
      success: "New password has been set",
      method: "put",
      formData: info,
      auth: true,
    });

    if (userInfo) {
      authContext.setAuthState(userInfo);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }

    reset();
  };

  return (
    <Wrapper>
      <AuthFormContainer>
        <h2>Reset password</h2>
        <AuthStyledForm onSubmit={handleSubmit(handleForm)}>
          {error && <p className="errorMsg errorMain">{error}</p>}
          {success && <p className="successrMsg errorMsg">{success}</p>}
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
            value={loading ? "Loading..." : "Reset password"}
          />
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default ResetPassword;
