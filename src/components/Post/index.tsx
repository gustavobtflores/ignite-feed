import React from "react";

import styles from "./style.module.scss";

export const Post: React.FC = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src="https://www.github.com/gustavobtflores.png" />
          </div>
          <div className={styles["user-info"]}>
            <strong>Gustavo Flores</strong>
            <span>Front-end developer</span>
          </div>
        </div>
        <time title="8 de maio as 20:34h" dateTime="2022-05-11 20:34:20" className={styles["posted-time"]}>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quo.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum!</p>
        <a href="#">jane.design/doctorcare</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
};
