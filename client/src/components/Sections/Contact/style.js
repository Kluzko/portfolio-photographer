import styled from "styled-components";

export const ContactWrapper = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin-top: 10rem;
  position: relative;
  height: 40vh;
  display: flex;
  flex-flow: column;
  justify-items: center;

  @media ${({ theme }) => theme.device.tabletMax} {
    height: 50vh;
  }
`;

export const StyledContactForm = styled.form`
  width: 85vw;
  height: 25vh;
  margin-top: 7rem;
  margin-left: 7.5vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  @media ${({ theme }) => theme.device.tabletMax} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }

  &.contact-submit {
    background: black;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  className: props.className,
}))`
  padding: 1rem;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  align-self: center;

  &.email {
    grid-area: 1 / 1 / 2 / 3;
    @media ${({ theme }) => theme.device.tabletMax} {
      grid-area: 1 / 1 / 2 / 4;
    }
  }
  &.title {
    grid-area: 2 / 1 / 3 / 3;

    @media ${({ theme }) => theme.device.tabletMax} {
      grid-area: 2 / 1 / 3 / 4;
    }
  }
`;

export const StyledTextArea = styled.textarea`
  border-color: ${({ theme }) => theme.colors.primary};
  grid-area: 1 / 3 / 3 / 6;
  resize: none;
  z-index: 3;

  @media ${({ theme }) => theme.device.tabletMax} {
    grid-area: 3 / 1 / 5 / 4;
    height: 5rem;
  }
`;

export const StyledSubmit = styled.input`
  margin-top: 1rem;
  padding: 0.7em;
  width: ${({ width }) => (width ? width : "320px")};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: white;
    background: ${({ theme }) => theme.colors.primary};
  }
  @media ${({ theme }) => theme.device.tabletMax} {
    grid-area: 5 / 2 / 6 / 3;
    margin-top: 5rem;
  }
`;
