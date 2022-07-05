export interface PostProps {
  title: string;
  content: string;
}

export default function Post({ title, content }: PostProps) {
  return (
    <article className="border-2 border-teal-500 p-2">
      <h2 className="font-bold">{title}</h2>
      <p>{content}</p>
    </article>
  );
}
