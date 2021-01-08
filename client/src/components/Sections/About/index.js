import React, { useState } from "react";
import {
  AboutContainer,
  AboutWrapper,
  ArticleInfo,
  BtnContainer,
  Title,
} from "./style";
import about from "./info.json";
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  const [value, setValue] = useState(0);

  const { title, info } = about[value];

  return (
    <AboutWrapper>
      <Title>
        <h2>About</h2>
      </Title>
      <AboutContainer>
        <BtnContainer>
          {about.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.title}
              </button>
            );
          })}
        </BtnContainer>
        <ArticleInfo className="job-info">
          <h3>{title}</h3>
          {info.map((info, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{info}</p>
              </div>
            );
          })}
        </ArticleInfo>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
