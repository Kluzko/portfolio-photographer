import React from "react";
import { useParams } from "react-router-dom";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import ErrorMessage from "../../components/ErrorMessage";
import Loader from "../../components/Loader";
import { Wrapper, ArticleWrapper } from "../../components/Wrappers";
import { useApi, apiStates } from "../../hooks/useApi";

const Article = () => {
  const { slug } = useParams();
  const {
    data: { error, state, data },
  } = useApi(`articles/${slug}`);

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const article = data.data;
      const cfg = {
        inlineStyles: true,
      };
      // parse Json to get delta object
      const { ops } = JSON.parse(article.body);
      // convert delta to html
      const converter = new QuillDeltaToHtmlConverter(ops, cfg);
      const html = converter.convert();
      console.log(html);
      return (
        <Wrapper
          style={{
            marginBottom: "2rem",
          }}
        >
          <ArticleWrapper dangerouslySetInnerHTML={{ __html: html }} />
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default Article;
