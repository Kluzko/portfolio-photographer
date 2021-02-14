import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 5%;
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  overflow: none;
  justify-items: center;
  grid-gap: 30px;
`;

const Card = styled.div`
  background-image: ${({ bckImg }) => `url(${bckImg})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "400px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:last-child {
    margin-bottom: 10%;
  }
`;

const AlbumtTitle = styled.p`
  color: ${({ color }) => (color ? color : "#000000")};
  font-size: 1.6rem;
  font-weight: bold;
  background: transparent;
  position: absolute;
  top: 20px;
  left: 40px;
`;

const LinkButton = styled(Link)`
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 24px;
  font-weight: bold;
  background: ${({ background }) => background || "black"};
  position: absolute;
  top: 70px;
  padding: 8px 15px;
  left: 40px;
`;

const IconWrapper = styled.div`
  background: white;
  width: 70px;
  height: 40px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  font-size: 20px;
  z-index: 10;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: transparent;
    height: 100%;
    width: 50%;
    transition: all 0.3s ease-in-out;
    border: none;
    &:first-child {
      border-right: 2px solid ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      background: black;
      color: white;
    }
  }
`;

// Article Card

const StyledArticleCard = styled.div`
  display: flex;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;
  flex-direction: column;
  width: 50vw;
  div {
    display: flex;
    margin-bottom: 1rem;
    justify-content: center;
    cursor: pointer;
  }
  .border {
    border-bottom: 2px solid gray;
    padding: 10px;
  }
  @media ${({ theme }) => theme.device.tabletXlMax} {
    div > h1 {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
  span {
    color: grey;
    position: absolute;
    right: 10px;
  }
  /* changin height 20px add next line shown of about  */
  p {
    color: #545454;
    padding: 10px;
    text-align: left;
    cursor: pointer;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    h1 {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
    div {
      border-color: black;
    }
    p,
    span {
      color: black;
    }
  }
`;
// this is terrible but its working
//I have no nerves for that anymore

const ArticleIconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  .innerWrapper {
    position: absolute;
    z-index: 10;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    right: 5%;

    div:first-child {
      border-right: 1px solid black;
    }
    div {
      margin: 0;
    }
    div:hover {
      background: black;
      svg {
        color: white;
      }
    }
    svg {
      font-size: 1.5rem;
      padding: 5px;
    }
  }
`;

export {
  Card,
  Wrapper,
  AlbumtTitle,
  LinkButton,
  IconWrapper,
  StyledArticleCard,
  ArticleIconWrapper,
};
