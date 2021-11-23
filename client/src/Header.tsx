import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <header>
      <nav className="nav">
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
