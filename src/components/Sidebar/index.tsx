import { PencilSimpleLine } from "phosphor-react";
import styles from "./style.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <div className={styles.avatar}>
          <img src="https://github.com/gustavobtflores.png" alt="User avatar" />
        </div>
        <strong>Gustavo Bernardo</strong>
        <span>Front-end Developer</span>
        <hr />
        <a href="#" className={styles["edit-button"]}>
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  );
}
