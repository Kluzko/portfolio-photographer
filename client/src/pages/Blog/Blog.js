import React, { useState } from "react";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import { Wrapper } from "../../components/Wrappers";
import { apiStates, useApi } from "../../hooks/useApi";
import { ArticleCard } from "../../components/Card";
import { StyledPagiantion } from "../../components/Dashboard/style";
import { showVisiblePages } from "../../utils/showVisblePages";

const Blog = () => {
  // Pagination
  const [postsPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  // To give active class current page
  const [active, setActive] = useState(currentPage - 1);

  const {
    data: { state, data, error },
    setRefetch,
  } = useApi(`articles?published=true`);

  switch (state) {
    case apiStates.ERROR:
      return <ErrorMessage>{error || "General error"}</ErrorMessage>;
    case apiStates.SUCCESS:
      // articles data
      const articles = data.data;
      // Total of  pages
      const totalPages = Math.ceil(data.count / postsPerPage);
      // array of visible pages
      const visiblePage = showVisiblePages(currentPage, totalPages);

      //get current posts
      const indexOfLastArticle = currentPage * postsPerPage;
      const indexOfFirstArticle = indexOfLastArticle - postsPerPage;
      const currentArticle = articles.slice(
        indexOfFirstArticle,
        indexOfLastArticle
      );

      return (
        <Wrapper>
          <div
            style={{
              marginTop: "10%",
            }}
          >
            {articles.length > 0 ? (
              currentArticle.map((article) => (
                <ArticleCard
                  key={article._id}
                  slug={article.slug}
                  article={article}
                  refetch={setRefetch}
                />
              ))
            ) : (
              <p>No articles</p>
            )}
          </div>
          <div
            style={{
              marginBottom: "5%",
              marginTop: "5%",
              display: "flex",
            }}
          >
            {articles.length > 0 &&
              visiblePage.map((page, i) => {
                console.log(i);
                function setPageAndActive() {
                  setActive(page - 1);
                  setCurrentPage(page);
                }
                return (
                  <StyledPagiantion
                    key={page}
                    onClick={setPageAndActive}
                    className={active === i ? "active" : ""}
                  >
                    <p>{page}</p>
                  </StyledPagiantion>
                );
              })}
          </div>
        </Wrapper>
      );
    default:
      return <Loader />;
  }
};

export default Blog;
