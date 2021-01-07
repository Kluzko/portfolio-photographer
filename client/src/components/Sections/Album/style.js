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
  grid-template-areas:
    "people people people people"
    "animals animals cities cities"
    "travel travel travel travel";
  transition: all 1.5s ease-in-out;

  .people {
    grid-area: people;
  }
  .animals {
    grid-area: animals;
  }
  .cities {
    grid-area: cities;
  }
  .travel {
    grid-area: travel;
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
    grid-template-areas:
      "people people people people"
      "animals animals animals animals"
      "cities cities cities cities"
      "travel travel travel travel";
  }
  object-fit: contain;

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
