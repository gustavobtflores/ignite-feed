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
        <span className={styles["posted-time"]}>Publicado há 13min</span>
      </header>
    </article>
  );
};
