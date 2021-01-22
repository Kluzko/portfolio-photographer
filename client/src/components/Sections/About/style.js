import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 90vw;
  max-width: ${({ theme }) => theme.maxWidth};
  margin-top: 8rem;

  .btn {
    text-transform: uppercase;
    background: violet;
    color: orangered;
    padding: 0.375rem 0.75rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    -webkit-transition: all 0.3s linear;
    transition: all 0.3s linear;
    font-size: 0.875rem;
    border: 2px solid transparent;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 0.1rem;
    display: block;
    width: 12rem;
    text-align: center;
    margin-top: 3rem;
  }
  .btn:hover {
    color: yellow;
    background: blue;
  }
`;

export const AboutContainer = styled.div`
  width: 80vw;

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  margin-left: 15%;

  .job-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: black;
    border: none;
  }
  .job-btn:hover {
    color: yellow;
    box-shadow: 0 2px green;
  }
  .active-btn {
    color: goldenrod;
    box-shadow: 0 2px grey;
  }

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;

    .job-btn {
      margin-bottom: 1rem;
    }
  }
`;

export const ArticleInfo = styled.article`
  margin-left: 10%;
  h3 {
    font-weight: 400;
    font-size: 2rem;
    margin-left: 3rem;
  }

  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: grey;
  }
`;

export const Title = styled.div`
  margin-bottom: 4rem;
  text-align: center;

  h2 {
    font-size: 3.5rem;
    font-weight: bold;
  }
`;
