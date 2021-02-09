import styled from "styled-components";

// Navbar Main
export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
// Logo
export const Logo = styled.div`
  margin-top: 1em;
  margin-left: 10%;
  z-index: 100;
  background: transparent;
  a {
    font-weight: bold;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  @media ${({ theme }) => theme.device.tabletXlMax} {
    margin-left: 1%;
  }
`;
// Desktop Menu

export const StyledMenu = styled.ul`
  display: flex;
  @media ${({ theme }) => theme.device.phoneMax} {
    display: none;
    visibility: 0;
  }
  z-index: 5;
  background: transparent;

  li {
    margin-top: 1.4em;
    margin-right: 1.9em;
    background: transparent;
    position: relative;
  }
  a {
    font-weight: 400;
  }

  /* dropdown */
  .dropdown {
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transition: all 0.5s ease;
    display: none;
    background: white;
  }
  .dropdown-container:hover {
    .dropdown {
      visibility: visible;
      z-index: 10;
      opacity: 1;
      display: flex;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
      border-radius: 8px;
      left: -1.5rem;
      width: 5rem;

      li {
        width: 3.875rem;
        margin-left: 1rem;
        margin-bottom: 0.5rem;
        padding: 10px;

        box-sizing: border-box;
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        width: 100%;
        @media ${({ theme }) => theme.device.tabletXlMin} {
          margin-left: 1.9rem;
        }
      }
      li:last-child {
        border-bottom: none;
      }
      li:hover {
        a {
          opacity: 0.8;
        }
      }
    }
  }
  @media ${({ theme }) => theme.device.tabletXlMax} {
    a {
      color: ${({ theme }) => theme.colors.primaryHover};
    }
    li {
      margin-right: 1em;
    }
  }
`;

// Mobile menu

export const MobileMenuWrapper = styled.nav`
  position: relative;
  @media ${({ theme }) => theme.device.phoneMin} {
    visibility: 0;
    display: none;
  }
`;
export const MobileMenuList = styled.ul`
  @media ${({ theme }) => theme.device.phoneMax} {
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    width: 100%;
    height: 100vh;
    text-align: right;
    transform: ${({ open }) =>
      open ? "translateX(-50%)" : "translateX(100%)"};
    display: ${({ open }) => (open ? "" : "none")};
    position: fixed;
    overflow-y: hidden;
    top: 0;
    left: 50%;
    z-index: 1000;
    transition: all 0.4s ease-in-out;
    text-align: center;
    /* dropdown need to be hidden on mobile menu */
    .dropdown {
      display: none;
      visibility: hidden;
    }

    @media (${({ theme }) => theme.device.phoneMax}) {
      width: 100%;
    }
    li {
      margin-bottom: 2rem;
    }
    a {
      font-size: 3rem;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      transition: color 0.3s linear;

      @media ${({ theme }) => theme.device.phoneMax} {
        font-size: 2.5rem;
        text-align: center;
        vertical-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
      }
    }
  }
`;

// Burger styles

export const StyledBurger = styled.button`
  position: fixed;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;

  padding: 0;
  z-index: 100032;

  &:focus {
    outline: none;
  }

  div {
    width: ${({ open }) => (open ? "1.5rem" : "2rem")};
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

// Login button

export const StyledLoginButton = styled.button`
  border: none;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primaryHover};
  color: white;
  padding: 10px 20px;
  margin-top: -20px;
  font-weight: bold;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(4px);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.99);
    box-shadow: 2px 2px 20px 0px rgba(50, 50, 50, 0.75);
  }
`;
