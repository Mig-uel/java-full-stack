import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import productsLoader from "./loaders/products.loader.ts";

import contactAction from "./actions/contact.action.ts";
import App from "./App.tsx";
import About from "./components/About.tsx";
import Cart from "./components/Cart.tsx";
import Contact from "./components/Contact.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
        loader: productsLoader,
        // hydrateFallbackElement: <p>Loading products...</p>, // Implement later
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: contactAction,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem("theme") === "dark" ? "dark" : "light"}
      transition={Bounce}
    />
  </StrictMode>
);
