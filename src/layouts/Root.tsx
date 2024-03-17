// src/layouts/Root.tsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen text-blue-500">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="text-center p-4">© 2024</footer>
    </div>
  );
};

export default Root;
