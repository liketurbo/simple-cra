import Navigation from "./components/Navigation";
import { RouterProvider } from "./hooks/useRouter";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

export default function App() {
  return (
    <RouterProvider>
      <Navigation />
      <MainPage />
      <PostPage />
    </RouterProvider>
  );
}
