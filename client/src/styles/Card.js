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
  background-size: cover;
  background-repeat: no-repeat;
  width: ${({ width }) => (width ? width : "400px")};
  height: ${({ height }) => (height ? height : "400px")};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const AlbumtTitle = styled.p`
  color: ${({ color }) => (color ? color : "#000000")};
  font-size: 1.8rem;
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
  background: ${({ background }) => background};
  position: absolute;
  top: 70px;
  padding: 8px 15px;
  left: 40px;
`;

export { Card, Wrapper, AlbumtTitle, LinkButton };
