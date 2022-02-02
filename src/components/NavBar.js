import React from "react";

const links = ["home", "about", "projects"];

const NavBar = () => (
  <nav>
    {
      links.map(link => (
        <a key={link} href={`/#${link}`}>{link}</a>
      ))
    }
  </nav>
);
export default NavBar;