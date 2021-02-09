import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoginButton from "./LoginButton";

const MenuLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="dropdown-container">
        <Link to="/#albums">Albums</Link>
        {auth.isAdmin() && (
          <ul className="dropdown">
            <li>
              {" "}
              <Link to="/#albums">Albums</Link>
            </li>

            <li>
              {" "}
              <Link to="/addAlbum">Add album</Link>
            </li>
          </ul>
        )}
      </li>

      <li>
        <Link to="/#about">About</Link>
      </li>

      <li>
        <Link to="/#contact">Contact</Link>
      </li>
      {auth.isAuthenticated() && (
        <>
          <li>
            <Link to="/dashboard">Dasboard</Link>
          </li>
        </>
      )}

      <li className="dropdown-container">
        <Link to="/blog">Blog</Link>
        {(auth.isAdmin() || auth.isBloger()) && (
          <ul className="dropdown">
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/blog/create">Create Article</Link>
            </li>
          </ul>
        )}
      </li>
      <li>
        <LoginButton auth={auth} />
      </li>
    </>
  );
};

export default MenuLinks;
