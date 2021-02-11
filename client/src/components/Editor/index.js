import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import { useSendFormData } from "../../hooks/useSendFormData";
import { FormEditorContainer } from "./style";
import { DefaultInput, SubmitInput } from "../Forms/styles";

import "quill/dist/quill.snow.css";
import QuilEditor from "./QuillEditor";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(1, "This field is required")
    .max(30, "Max 30 chars")
    .required("This filed is required"),
  published: yup.string().required("This filed is required"),
});
const Editor = () => {
  const [textInfo, setTextInfo] = useState([]);

  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const handleArticle = async (info) => {
    const { title, published } = info;
    const isPublishedTrue = published.toLowerCase() === "true";
    const articleData = {
      title,
      published: isPublishedTrue,
      body: textInfo,
    };

    const data = await sendFormData({
      formData: articleData,
      method: "post",
      url: "articles",
      success: "Article was made succesfully",
      auth: true,
    });

    if (data) {
      setTimeout(() => {
        history.push(`/blog/${data.data.slug}`);
      }, 2000);
    }
  };

  return (
    <FormEditorContainer onSubmit={handleSubmit(handleArticle)}>
      <div className="form">
        <DefaultInput placeholder="title" ref={register} name="title" />
      </div>
      {error && <p className="errorMsg errorMain">{error}</p>}
      {success && <p className="successrMsg errorMsg">{success}</p>}
      <p className="errorMsg">{errors.title?.message}</p>
      <QuilEditor state={{ textInfo: [textInfo, setTextInfo] }} />
      <div className="bottomForm">
        <select name="published" id="published" ref={register}>
          <option value="false">Not Published</option>
          <option value="true">Published</option>
        </select>
        <p className="errorMsg">{errors.published?.message}</p>

        <SubmitInput
          type="submit"
          value={loading ? "Loading..." : "Add article"}
        />
      </div>
    </FormEditorContainer>
  );
};

export default Editor;
