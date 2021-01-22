import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const MenuLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/#albums">Albums</Link>
      </li>
      {auth.isAdmin() && (
        <li>
          <Link to="/addAlbum">Add album</Link>
        </li>
      )}

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
          <li>
            <button onClick={() => auth.logout()}>Logout</button>
          </li>
        </>
      )}
    </>
  );
};

export default MenuLinks;
