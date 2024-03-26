// src/layouts/Root.tsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ThemeProvider } from "../contexts/ThemeContext";

const Root = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen text-blue-500">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Root;
