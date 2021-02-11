import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, useParams } from "react-router-dom";
import QuilEditor from "./QuillEditor";
import { useSendFormData } from "../../hooks/useSendFormData";
import { FormEditorContainer } from "./style";
import { DefaultInput, SubmitInput } from "../Forms/styles";
import { useApi, apiStates } from "../../hooks/useApi";

import "quill/dist/quill.snow.css";

import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(1, "This field is required")
    .max(30, "Max 30 chars")
    .required("This filed is required"),
  published: yup.string().required("This filed is required"),
});
const EditorEditArticle = () => {
  const { slug } = useParams();
  const history = useHistory();

  const {
    data: { state, data },
  } = useApi(`articles/${slug}`);
  const [textInfo, setTextInfo] = useState([]);

  const {
    sendFormData,
    data: { loading, error, success },
  } = useSendFormData();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

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
      method: "put",
      url: `articles/${slug}`,
      success: "Article was made succesfully",
      auth: true,
    });

    if (data) {
      setTimeout(() => {
        history.push(`/blog/${data.data.slug}`);
      }, 2000);
    }
  };

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{data.error || "General Error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const article = data.data;

      return (
        <FormEditorContainer onSubmit={handleSubmit(handleArticle)}>
          <div className="form">
            <DefaultInput
              placeholder="title"
              ref={register}
              name="title"
              defaultValue={article.title}
            />
          </div>
          {error && <p className="errorMsg errorMain">{error}</p>}
          {success && <p className="successrMsg errorMsg">{success}</p>}
          <p className="errorMsg">{errors.title?.message}</p>
          <QuilEditor
            state={{ textInfo: [textInfo, setTextInfo] }}
            defaultValue={article.body}
          />
          <div className="bottomForm">
            <select
              name="published"
              id="published"
              ref={register}
              defaultValue={article.published}
            >
              <option value="false">Not Published</option>
              <option value="true">Published</option>
            </select>
            <p className="errorMsg">{errors.published?.message}</p>

            <SubmitInput
              type="submit"
              value={loading ? "Loading..." : "Edit article"}
            />
          </div>
        </FormEditorContainer>
      );
    default:
      return <Loader />;
  }
};

export default EditorEditArticle;
