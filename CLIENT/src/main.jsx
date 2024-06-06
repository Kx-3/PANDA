import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Plant from "./pages/Plant.jsx";
import Trees from "./pages/Trees.jsx";
import Tree from "./pages/Tree.jsx";
import Sites from "./pages/Sites.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/plant",
    element: <Plant />,
  },
  {
    path: "/trees",
    element: <Trees />,
  },
  {
    path: "/tree/:id",
    element: <Tree />,
  },
  {
    path: "/sites",
    element: <Sites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={paths} />
    </AuthProvider>
  </React.StrictMode>
);
