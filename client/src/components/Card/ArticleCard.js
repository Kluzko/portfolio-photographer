import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import textVersion from "textversionjs";
import { getDate } from "../../utils/getDate";
import { getDescription } from "../../utils/getDescription";
import { ArticleIconWrapper, StyledArticleCard } from "./styles";
import { Dialog } from "../Dialog";
import { FetchContext } from "../../context/FetchContext";
import { AuthContext } from "../../context/AuthContext";

const ArticleCard = ({ slug, article, refetch }) => {
  const history = useHistory();
  const [isActive, setIsActive] = useState(false);
  const fetchContext = useContext(FetchContext);
  const auth = useContext(AuthContext);
  const handleActive = () => setIsActive(!isActive);

  const handleClick = () => {
    history.push(`blog/${slug}`);
  };

  const handleDelete = async () => {
    const { data } = await fetchContext.authAxios.delete(`articles/${slug}`);
    //to refetch on delete
    refetch(data.data);
  };

  const date = getDate(article.createdAt);

  const cfg = {};
  const { ops } = JSON.parse(article.body);
  // convert json to plain html
  const converter = new QuillDeltaToHtmlConverter(ops, cfg);
  const html = converter.convert();

  // convert html to plaintext

  const plaintext = textVersion(html);

  // Get shortened verision of plaintext with regex which deletes whites space,showing urls and other stuff which doesnt meant to be shown

  const description = getDescription(plaintext, 200);

  return (
    <StyledArticleCard>
      <div onClick={handleClick} className="border">
        <h1>{article.title}</h1>
        <span>{date}</span>
      </div>

      <p onClick={handleClick}>{`${description}...`}</p>
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
