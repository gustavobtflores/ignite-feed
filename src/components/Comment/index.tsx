import { Trash } from "phosphor-react";
import styles from "./style.module.scss";

export const Comment: React.FC = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gustavobtflores.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo Flores</strong>
              <time title="8 de maio as 20:34h" dateTime="2022-05-11 20:34:20">
                Cerca de 1h atrás
              </time>
              <Trash />
            </div>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>Aplaudir</footer>
      </div>
    </div>
  );
};
