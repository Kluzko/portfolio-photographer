import React, { useEffect, useContext } from "react";
import { useQuill } from "react-quilljs";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { EditorInnerContainer, FormEditorContainer } from "./style";
import { DefaultInput, SubmitInput } from "../Forms/styles";
import { FetchContext } from "../../context/FetchContext";
import { useHistory } from "react-router-dom";
import "quill/dist/quill.snow.css";

const schema = yup.object().shape({
  title: yup
    .string()
    .min(1, "This field is required")
    .max(30, "Max 30 chars")
    .required("This filed is required"),
  published: yup.string().required("This filed is required"),
});
const Editor = () => {
  const { quill, quillRef, Quill } = useQuill();
  const fetchContext = useContext(FetchContext);

  const hisotry = useHistory();
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (quill) {
      // Add custom handler for Image Upload
      quill.getModule("toolbar").addHandler("image", imageHandler);
    }
  }, [quill]);

  function imageHandler() {
    const range = quill.getSelection();
    const value = prompt("please copy paste the image url here.");
    if (value) {
      quill.insertEmbed(range.index, "image", value, Quill.sources.USER);
    }
  }
  const handleArticle = async (data) => {
    const { title, published } = data;
    const isPublishedTrue = published.toLowerCase() === "true";
    const articleData = {
      title,
      published: isPublishedTrue,
      body: JSON.stringify(quill.getContents()),
    };
    await fetchContext.authAxios.post("articles", articleData);
    reset();
    setTimeout(() => {
      hisotry.push("/");
    }, 2000);
  };

  return (
    <FormEditorContainer onSubmit={handleSubmit(handleArticle)}>
      <div className="form">
        <DefaultInput placeholder="title" ref={register} name="title" />
      </div>
      <p className="errorMsg">{errors.title?.message}</p>
      <EditorInnerContainer>
        <div ref={quillRef} />
      </EditorInnerContainer>
      <div className="bottomForm">
        <select name="published" id="published" ref={register}>
          <option value="false">Not Published</option>
          <option value="true">Published</option>
        </select>
        <p className="errorMsg">{errors.published?.message}</p>
        <SubmitInput type="submit" />
      </div>
    </FormEditorContainer>
  );
};

export default Editor;
