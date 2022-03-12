import React from "react";
import NavSCSS from "./NavBar.module.scss";

import NavLinks from "./NavLinks";

// --- Component --- //

export default function NavBar() {
  return (
    <nav className={NavSCSS.navbar}>
      <ul>
        {NavLinks.map((link) => (
          <li className="items">
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
