import { useEffect, useState } from "react";
import PostComponent from "../components/Post";
import useRouter from "../hooks/useRouter";
import { Post } from "../types";

export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const { currentPage, setCurrentPage } = useRouter();

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3001/posts")
      .then((r) => r.json())
      .then((d) => {
        setPosts(d);
        setLoading(false);
      });
  }, []);

  if (currentPage !== "/") return null;

  return (
    <main className="mx-auto w-3/4">
      {loading ? (
        <span>Loading...</span>
      ) : (
        posts.map((p) => (
          <a
            key={p.id}
            href={`/posts/${p.id}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(`/posts/${p.id}`);
            }}
          >
            <PostComponent {...p} />
          </a>
        ))
      )}
    </main>
  );
}
