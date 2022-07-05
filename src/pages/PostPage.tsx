import { useEffect, useState } from "react";
import useRouter from "../hooks/useRouter";
import { Post } from "../types";

export default function PostPage() {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<Post | null>(null);
  const { currentPage } = useRouter();

  useEffect(() => {
    setLoading(true);

    const match = currentPage.match(/\d+$/);
    if (!match) return;

    fetch(`http://localhost:3001/posts/${match[0]}`)
      .then((r) => r.json())
      .then((d) => {
        setPost(d);
        setLoading(false);
      });
  }, [currentPage]);

  if (!currentPage.startsWith("/posts/")) return null;

  if (!post) return null;

  return (
    <main className="mx-auto w-3/4">
      {loading ? (
        <span>Loading...</span>
      ) : (
        <>
          <h1 className="text-2xl mb-2">{post.title}</h1>
          <p>{post.content}</p>
        </>
      )}
    </main>
  );
}
