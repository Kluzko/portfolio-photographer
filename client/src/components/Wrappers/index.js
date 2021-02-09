import styled from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
  min-height: 100%;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  margin-left: 5rem;
  width: 100%;
`;

export const CartWrapper = styled.div`
  margin-top: 5%;
  display: grid;
  grid-auto-rows: 300px;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));

  overflow: none;
  justify-items: center;
  grid-gap: 30px;
  min-height: 100vh;
  position: relative;
`;

export const FormWrapper = styled.div`
  margin-top: 15%;
  margin-left: 0%;
  height: 100vh;

  @media ${({ theme }) => theme.device.tabletMax} {
    height: 105vh;
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    margin-top: 10%;
    margin-left: 20%;
    height: 120vh;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: black;
  padding-top: 20px;
`;

export const TextWrapper = styled.div`
  line-height: 1.4;
  position: absolute;
  top: ${({ top }) => (top ? top : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  z-index: 100;
  background: transparent;
  display: flex;
  flex-flow: column;
`;

export const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row;
  align-items: center;
  overflow-x: none;
  position: relative;
  height: 95vh;
  @media ${({ theme }) => theme.device.tabletXlMax} {
    height: 70vh;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
  position: relative;

  .toolbar {
    background: white;
    div {
      background: white;
    }
  }
  .wrapper-class {
    width: 60vw;
    height: 50vh;
  }
  .editor-class {
    border: 1px solid black;
    background: white;
    div {
      background: white;
    }
  }
`;

export const PreviewWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    max-width: 100%;
    object-fit: contain;
  }

  @media ${({ theme }) => theme.device.tabletXlMax} {
    right: 2%;
    top: 15%;
    & > div {
      width: 350px;
    }
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    width: 300px;
    position: relative;
    height: 300px;
    margin-top: 20px;
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    left: -12%;
  }
`;

export const MasonryLayout = styled.div`
  margin: 10% 2rem 5rem 2rem;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 15rem;
  grid-gap: 10px;
  grid-auto-flow: row;
  @media ${({ theme }) => theme.device.tabletMax} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    grid-template-columns: repeat(1, 1fr);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: 50% 50%;
  }
`;

export const ArticleWrapper = styled.div`
  width: 90vw;
  height: 100%;
  border-radius: 10px;

  background: white;
  li {
    list-style: inside;
  }
  margin-top: 10%;
`;
