import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);

  //coloca os posts do db dentro do state "posts" e ordena por data decrescente
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="pb-72 ">
      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post.data()} />
      ))}
    </div>
  );
}

export default Feed;
