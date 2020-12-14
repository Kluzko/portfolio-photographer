import React from "react";
import { NavLink } from "react-router-dom";
const MenuLinks = () => (
  <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>

    <li>
      <NavLink to="/albums">Albums</NavLink>
    </li>
    <li>
      <NavLink to="/addAlbum">Add album</NavLink>
    </li>

    <li>
      <NavLink to="/about">About</NavLink>
    </li>

    <li>
      <NavLink to="/contact">Contact</NavLink>
    </li>
  </>
);

export default MenuLinks;
