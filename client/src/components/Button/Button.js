import styles from "./Button.module.scss";

const button = (props) => {
  return (
    <button
      className={`${styles.button} ${styles[props.bgColor]} `}
      onClick={props.button}
    >
      {props.children}
    </button>
  );
};

export default button;
