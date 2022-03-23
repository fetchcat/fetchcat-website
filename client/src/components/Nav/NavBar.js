import styles from "./Nav.module.scss";

// --- NavBar Component --- //

export const NavBar = ({ Navigation }) => {
  return (
    <ul className={styles.navbar}>
      <Navigation />
    </ul>
  );
};
