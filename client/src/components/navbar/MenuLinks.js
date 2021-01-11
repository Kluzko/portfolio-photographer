import React from "react";

import { Link } from "react-router-dom";

const MenuLinks = () => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>

    <li>
      <Link to="/#albums">Albums</Link>
    </li>
    <li>
      <Link to="/addAlbum">Add album</Link>
    </li>

    <li>
      <Link to="/#about">About</Link>
    </li>

    <li>
      <Link to="/#contact">Contact</Link>
    </li>
  </>
);

export default MenuLinks;
