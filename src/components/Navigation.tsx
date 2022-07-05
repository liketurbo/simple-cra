import useRouter from "../hooks/useRouter";

export default function Navigation() {
  const { setCurrentPage } = useRouter();

  return (
    <header className="mx-auto w-3/4">
      <nav className="mb-4 mt-2">
        <a
          className="font-bold border-2 border-indigo-500 py-1 p-2 hover:border-indigo-600 inline-block"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("/");
          }}
        >
          Posts
        </a>
      </nav>
    </header>
  );
}
