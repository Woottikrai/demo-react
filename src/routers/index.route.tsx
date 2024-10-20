import { createBrowserRouter } from "react-router-dom";
import Contract from "../component/contract/contract";
import About from "../component/about/About";
import Home from "../component/home/Home";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "about", element: <About /> },
  { path: "contact", element: <Contract /> },
]);
