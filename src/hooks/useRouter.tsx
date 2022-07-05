import React, { ReactNode, useContext, useState } from "react";

export default function useRouter() {
  const { currentPage, setCurrentPage } = useContext(RouterContext);
  return {
    currentPage,
    setCurrentPage,
  };
}

const RouterContext = React.createContext({
  currentPage: "/",
  setCurrentPage: (newPage: string) => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("/");
  return (
    <RouterContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </RouterContext.Provider>
  );
}
