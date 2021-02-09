import React from "react";
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
import { useSendFormData } from "../../hooks/useSendFormData";
import { useRedirectAuthenicatedUser } from "../../hooks/useRedirectAuthenticatedUser";

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
});

const ForgotPassword = () => {
  useRedirectAuthenicatedUser();
  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (info) => {
    await sendFormData({
      url: "auth/forgot-password",
      success: "A password reset message has been sent to your email",
      method: "post",
      formData: info,
    });

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
            type="text"
            placeholder="Email"
            name="email"
            ref={register}
          />
          <p className="errorMsg">{errors.email?.message}</p>

          <SubmitInput type="submit" value={loading ? "Loading..." : "Send"} />
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default ForgotPassword;
