import React from "react";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Wrapper } from "../../components/Wrappers";
import { apiStates, useApi } from "../../hooks/useApi";
import { ArticleCard } from "../../components/Card";

const Blog = () => {
  const {
    data: { state, data, error },
  } = useApi(`articles`);

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      const articles = data.data;

      return (
        <Wrapper>
          <div
            style={{
              marginTop: "20%",
            }}
          >
            {articles.length > 0 ? (
              articles.map((article) => (
                <ArticleCard
                  key={article._id}
                  slug={article.slug}
                  article={article}
                />
              ))
            ) : (
              <p>No articles</p>
            )}
          </div>
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default Blog;
