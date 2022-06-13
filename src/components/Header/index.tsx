import styles from "./style.module.scss";
import logo from "../../assets/ignite-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={logo} alt="Ignite logo" />
        <span>Ignite Feed</span>
      </h1>
    </header>
  );
};
