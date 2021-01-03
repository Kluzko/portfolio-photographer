import styled from "styled-components";

// Add breakpoints for bigger displays
const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 10%;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;

  h1 {
    margin-top: 10px;
    background: none;
  }
  p {
    font-size: 1.5rem;
    position: absolute;
    top: 35%;
    left: 50px;
    z-index: 10;
    font-weight: bold;
    background: transparent;
  }

  img {
    max-width: 100%;

    object-fit: contain;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    width: 350px;
    height: 350px;
    right: 2%;
    top: 15%;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    width: 300px;
    height: 300px;
    position: relative;

    h1 {
      visibility: 0;
      display: none;
    }
    p {
      font-size: 1rem;
      top: 32%;
      left: 30px;
    }
  }
`;

export { ImageWrapper };
