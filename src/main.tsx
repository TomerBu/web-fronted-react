import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./routes/Register.tsx";
import Login from "./routes/Login.tsx";
import Cards from "./routes/Cards.tsx";
import Error from "./routes/Error.tsx";
import Root from "./layouts/Root.tsx";
import Card from "./routes/Card.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Cards /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/cards", element: <Cards /> },
      { path: "/cards/:id", element: <Card /> },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
