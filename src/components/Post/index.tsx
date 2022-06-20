import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./style.module.scss";

export interface CommentTypes {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  publishedAt: Date;
}

export const Post = () => {
  const [commentFormValue, setCommentFormValue] = useState<string>("");
  const comments: CommentTypes[] = [
    {
      id: 1,
      user: {
        name: "Gustavo Flores",
        avatar: "https://github.com/gustavobtflores.png",
      },
      content: "Muito bom Devon, parabéns!! 👏👏",
      publishedAt: new Date(),
    },
  ];

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.user}>
            <Avatar image="https://www.github.com/gustavobtflores.png" />
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

          <textarea
            onChange={(event) => {
              setCommentFormValue(event.target.value);
            }}
            placeholder="Deixe seu comentário"
          />

          <button type="submit" disabled={commentFormValue.length === 0}>
            Publicar
          </button>
        </form>
      </article>
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </>
  );
};
