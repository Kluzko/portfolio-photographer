import React from "react";
import { useHistory } from "react-router-dom";
import { getDate } from "../../utils/getDate";
import { StyledArticleCard } from "./styles";

const ArticleCard = ({ slug, article }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`blog/${slug}`);
  };
  const date = getDate(article.createdAt);
  const jsonText = JSON.parse(article.body);
  const text = jsonText.ops[0].insert;

  return (
    <StyledArticleCard onClick={handleClick}>
      <div>
        <h1>{article.title}</h1>
        <span>{date}</span>
      </div>

      <p>{`${text} ...`}</p>
    </StyledArticleCard>
  );
};

export default ArticleCard;
