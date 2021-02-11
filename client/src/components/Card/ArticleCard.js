import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { getDate } from "../../utils/getDate";
import { ArticleIconWrapper, StyledArticleCard } from "./styles";
import { Dialog } from "../Dialog";
import { FetchContext } from "../../context/FetchContext";
import { AuthContext } from "../../context/AuthContext";
import { useQuill } from "react-quilljs";

const ArticleCard = ({ slug, article, refetch }) => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const fetchContext = useContext(FetchContext);
  const auth = useContext(AuthContext);
  const handleActive = () => setIsActive(!isActive);

  const handleClick = () => {
    history.push(`blog/${slug}`);
  };

  const date = getDate(article.createdAt);
  const jsonText = JSON.parse(article.body);

  let text = jsonText.ops[0].insert;

  const handleDelete = async () => {
    const { data } = await fetchContext.authAxios.delete(`articles/${slug}`);
    //to refetch on delete
    refetch(data.data);
  };

  return (
    <StyledArticleCard>
      <div onClick={handleClick} className="border">
        <h1>{article.title}</h1>
        <span>{date}</span>
      </div>

      <p onClick={handleClick}>{`${text} ...`}</p>
      {(auth.isBloger() || auth.isAdmin()) && (
        <ArticleIconWrapper>
          <div className="innerWrapper">
            <div>
              <Link to={`blog/edit/${slug}`}>
                <AiOutlineEdit />
              </Link>
            </div>
            <div onClick={handleActive}>
              <AiOutlineDelete
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          {isActive && (
            <Dialog
              handleClick={handleActive}
              handleDelete={handleDelete}
              deleteText={"Delete"}
            />
          )}
        </ArticleIconWrapper>
      )}
    </StyledArticleCard>
  );
};

PropTypes.ArticleCard = {
  slug: PropTypes.string.isRequired,
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
