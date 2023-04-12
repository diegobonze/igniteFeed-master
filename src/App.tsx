import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/diegobonze.png",
      name: "Diego Bonze",
      role: "Web developer Júnior: Linear",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na trilha Ignite da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },

      { type: "link", content: "👉 Github/IgniteFeed" },
    ],
    publishedAt: new Date("2023-03-13 15:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/blenybonze.png",
      name: "Bleny Bonze",
      role: "Web developer Sênior: ZAP",
    },
    
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na trilha Ignite da Rocketseat. O nome do projeto é IgniteFeed 🚀",
      },

      { type: "link", content: "👉 Github/IgniteFeed" },
    ],
    publishedAt: new Date("2023-03-12 14:00:00"),
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
