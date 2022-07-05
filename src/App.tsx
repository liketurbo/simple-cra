import { useEffect, useState } from "react";
import PostComponent from "./components/Post";
import { Post } from "./types";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/posts")
      .then((r) => r.json())
      .then((d) => {
        setPosts(d);
        setLoading(false);
      });
  }, []);

  return (
    <main className="mx-auto w-3/4 ">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      {loading ? (
        <span>Loading...</span>
      ) : (
        posts.map((p) => <PostComponent {...p} />)
      )}
    </main>
  );
}

export default App;
