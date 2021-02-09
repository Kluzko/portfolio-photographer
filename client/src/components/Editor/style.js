import styled from "styled-components";

export const EditorInnerContainer = styled.div`
  width: 50vw;
  height: 60vh;
  background: white;
  @media ${({ theme }) => theme.device.tabletXlMax} {
    width: 80vw;
  }
  @media ${({ theme }) => theme.device.phoneMax} {
    width: 95vw;
  }

  div {
    background: white;

    p {
      background: white;
    }
  }
`;

export const FormEditorContainer = styled.form`
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    text-align: center;
    p {
      color: ${({ theme }) => theme.colors.error};
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 85%;
      width: 60%;
    }
    input {
      width: 40%;
    }
    input:hover {
      border: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
  strong {
    font-weight: bold !important;
  }
  em {
    font-style: italic !important;
  }
  strong > em {
    font-weight: bold !important;
    font-style: italic !important;
  }
  em > strong {
    font-weight: bold !important;
    font-style: italic !important;
  }
  .bottomForm {
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .errorMsg {
    }
    select {
      margin-bottom: 1rem;
    }
  }
`;
