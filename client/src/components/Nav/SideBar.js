import { useState } from "react";

import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./Nav.module.scss";

// --- SideBar Component --- //

export const SideBar = ({ Navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className={`${styles.sidebar} ${menuOpen ? "active" : ""}`}>
      <div className={styles.toggleswitch} onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <FaBars />}
      </div>
      <ul className={styles.sidebarlinks} onClick={toggleMenu}>
        <Navigation />
      </ul>
    </div>
  );
};
