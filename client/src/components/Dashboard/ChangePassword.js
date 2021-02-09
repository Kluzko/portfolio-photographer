import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSendFormData } from "../../hooks/useSendFormData";
import {
  AuthFormContainer,
  AuthStyledForm,
  StyledInput,
  SubmitInput,
} from "../Forms/styles";
import { Wrapper } from "../Wrappers";
import DasboardLinks from "./DasboardLinks";

const schema = yup.object().shape({
  currentPassword: yup
    .string()
    .min(6, "Password should be 6 characters long")
    .required("This field is required"),

  newPassword: yup
    .string()
    .min(6, "Password should be 6 characters long")
    .required("This field is required"),

  password_repeat: yup.string().when("newPassword", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf([yup.ref("newPassword")], "Both password need to be the same"),
  }),
});

const ChangePassword = () => {
  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const { handleSubmit, register, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdate = async (info) => {
    await sendFormData({
      formData: info,
      method: "put",
      success: "Password changed",
      url: "auth/update-password",
      auth: true,
    });
    reset();
  };

  return (
    <Wrapper
      style={{
        marginBottom: "2rem",
      }}
    >
      <DasboardLinks startValue={1} />
      <AuthFormContainer>
        <AuthStyledForm onSubmit={handleSubmit(handleUpdate)}>
          {error && <p className="errorMsg errorMain">{error}</p>}
          {success && <p className="successrMsg errorMsg">{success}</p>}
          <StyledInput
            name="currentPassword"
            type="password"
            placeholder="Current password"
            ref={register}
          />
          <p className="errorMsg">{errors.currentPassword?.message}</p>
          <StyledInput
            name="newPassword"
            type="password"
            placeholder="New password"
            ref={register}
          />
          <p className="errorMsg">{errors.newPassword?.message}</p>
          <StyledInput
            name="password_repeat"
            type="password"
            placeholder="New password repeat"
            ref={register}
          />
          <p className="errorMsg">{errors.password_repeat?.message}</p>
          <SubmitInput
            type="submit"
            value={loading ? "Loading..." : "Change Password"}
          />
        </AuthStyledForm>
      </AuthFormContainer>
    </Wrapper>
  );
};

export default ChangePassword;
