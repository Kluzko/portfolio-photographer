import styled from "styled-components";

export const Wrapper = styled.section`
  height: 100vh;
  position: relative;
  margin-left: 10%;
  margin-right: 10%;
`;

export const AlbumWrapper = styled.div`
  position: absolute;
  top: 200px;
  width: 100%;
  height: auto;

  display: grid;
  gap: 30px;
  padding-bottom: 30px;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
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
    transform: scale(1.01);
    z-index: 300;
  }
`;
