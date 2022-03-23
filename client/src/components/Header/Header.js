import { Nav } from "../Nav/Nav";

import styles from "./Header.module.scss";

// --- Header Component --- //

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Nav />
    </header>
  );
};

export default Header;
