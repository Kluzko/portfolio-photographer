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
        inlineStyles: {
          font: {
            serif: "font-family: Georgia, Times New Roman, serif",
            monospace: "font-family: Monaco, Courier New, monospace",
          },
          size: {
            small: "font-size: 0.75rem",
            large: "font-size: 1.5rem",
            huge: "font-size: 2.5rem",
          },
          indent: (value, op) => {
            var indentSize = parseInt(value, 10) * 3;
            var side = op.attributes["direction"] === "rtl" ? "right" : "left";
            return "padding-" + side + ":" + indentSize + "em";
          },
          direction: (value, op) => {
            if (value === "rtl") {
              return (
                "direction:rtl" +
                (op.attributes["align"] ? "" : "; text-align: inherit")
              );
            } else {
              return "";
            }
          },
        },
      };
      // parse Json to get delta object
      const { ops } = JSON.parse(article.body);
      // convert delta to html
      const converter = new QuillDeltaToHtmlConverter(ops, cfg);
      const html = converter.convert();

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
