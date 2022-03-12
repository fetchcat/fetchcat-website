import React, { useState } from "react";
import SideBarSCSS from "./SideBar.module.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import NavLinks from "./NavLinks";

export default function SideBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggle = () => setToggleMenu(!toggleMenu);
  return (
    <nav>
      <div onClick={toggle} className={SideBarSCSS.openClose}>
        {toggleMenu ? <AiOutlineClose /> : <FaBars />}
      </div>

      {toggleMenu && (
        <ul className={SideBarSCSS.sidebar}>
          {NavLinks.map((link) => (
            <li className="items">
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
