import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  margin-left: 10%;
  margin-right: 10%;
  @media ${({ theme }) => theme.device.tabletXlMax} {
    margin-left: 5%;
    margin-right: 5%;
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    margin-left: 10%;
    margin-right: 10%;
  }
`;

export const AlbumWrapper = styled.div`
  position: absolute;
  top: 200px;
  width: 100%;
  height: auto;
  justify-content: center;
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

    div {
      object-fit: cover;
    }
  }

  @media ${({ theme }) => theme.device.tabletMax} {
    div {
      height: 30rem;
    }
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    div {
      height: 20rem;
      width: 25.5rem;
    }
  }
`;
