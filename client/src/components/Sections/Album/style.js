import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
`;

export const AlbumWrapper = styled.div`
  position: relative;
  top: 200px;
  width: 100%;
  height: auto;
  display: grid;

  gap: 30px;
  padding-bottom: 30px;

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);

  transition: all 1.5s ease-in-out;

  & > div:first-child {
    grid-area: 1 / 1 / 2 / 5;
  }
  & > div:nth-of-type(2) {
    grid-area: 2 / 1 / 3 / 3;
  }
  & > div:nth-of-type(3) {
    grid-area: 2 / 3 / 3 / 5;
  }
  & > div:last-child {
    grid-area: 3 / 1 / 4 / 5;
  }

  .button-wrapper {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 40px;
    text-align: center;
    padding: 10px 20px;
    position: absolute;
    bottom: -3%;
    left: 40%;
  }
  div:hover {
    transform: scale(0.99);
    z-index: 300;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    grid-template-rows: repeat(4, 1fr);
    & > div:first-child {
      grid-area: 1 / 1 / 2 / 5;
    }
    & > div:nth-of-type(2) {
      grid-area: 2 / 1 / 3 / 5;
    }
    & > div:nth-of-type(3) {
      grid-area: 3 / 1 / 4 / 5;
    }
    & > div:last-child {
      grid-area: 4 / 1 / 5 / 5;
    }
    object-fit: contain;
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    div {
      height: 30rem;
    }
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    div {
      height: 20rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`;
