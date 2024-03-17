import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
import Cards from "./routes/Cards.tsx";
import App from "./App.tsx";
import Error from "./routes/Error.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/cards", element: <Cards /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
