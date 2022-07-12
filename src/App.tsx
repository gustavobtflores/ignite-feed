import { Header } from "./components/Header";
import "./styles/global.scss";
import styles from "./App.module.scss";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { createServer } from "miragejs";
import { useEffect, useState } from "react";
import axios from "axios";

createServer({
  routes() {
    this.get("api/posts", () => [
      {
        id: 1,
        author: {
          name: "Gustavo Flores",
          avatarUrl: "https://github.com/gustavobtflores.png",
          role: "Front-end developer",
        },
        content: [
          { type: "paragraph", text: "Fala galera, tudo bem?" },
          { type: "paragraph", text: "Eu sou o Gustavo" },
          { type: "link", text: "https://github.com/gustavobtflores" },
        ],
        publishedAt: new Date("2022-07-11 19:34:20"),
      },
    ]);
  },
});

export interface Post {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  content: PostContent[];
  publishedAt: Date;
}

export interface PostContent {
  type: "paragraph" | "link";
  text: string;
}

export function App() {
  const [Posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      setPosts(
        await axios("api/posts").then((res) => {
          return res.data;
        })
      );
    };

    getPosts();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {Posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
