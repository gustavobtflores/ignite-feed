import { Header } from "./components/Header";
import "./styles/global.scss";
import styles from "./App.module.scss";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Comment } from "./components/Comment";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
        {/* <Comment /> */}
      </div>
    </>
  );
}
