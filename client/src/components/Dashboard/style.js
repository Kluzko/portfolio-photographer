import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  width: 100%;

  margin-top: 10%;
  align-items: flex-end;
  background: transparent;
  margin-left: 10px;
  h2 {
    font-size: 1.7rem;
    font-weight: 300;
    color: black;
  }
  p {
    background: transparent;
    display: flex;
    justify-content: center;
    margin-bottom: 0.3rem;
    font-size: 1.2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    width: 40%;
    padding: 3px 20px;
    margin-left: 0.5rem;
  }
`;

// Dasboard navigation

export const SectionNavigation = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    @media ${({ theme }) => theme.device.phoneMax} {
      width: 80%;
    }
  }

  ul > li {
    padding: 20px;
    background: white;
    border-right: 3px solid #e2f1ff;
    &:last-child {
      border-right: none;
    }

    a {
      font-weight: bold;
      color: black;
    }
  }
  .active {
    background: #37d2b4;
    a {
      font-weight: bold;
      color: white;
    }
  }
`;

// table (for now)

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10%;
  overflow-y: hidden;
  align-items: center;

  & > input {
    width: 30%;
    margin-bottom: -5%;
  }

  table {
    margin-top: 10%;
    border: 2px solid #ffcc00;
    text-align: center;
    display: block;
    width: 80%;
    overflow-x: scroll;
  }

  td {
    border: 2px solid #ffcc00;
    padding: 3px;
    background-color: white;
    tr {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  th {
    border: 2px solid #ffcc00;
    padding: 3px;
    color: #000000;
    background-color: #ffcc00;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const StyledPagiantion = styled.div`
  padding: 0 10px 0 10px;
  border: 1px solid grey;
  cursor: pointer;
  &.active {
    background: ${({ theme }) => theme.colors.primary};

    p {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;
