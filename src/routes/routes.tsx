import { createBrowserRouter } from "react-router-dom";
import {
  LazyAbout,
  LazyHome,
  LazyProjects,
  LazyServices,
} from "./lazyComponents";
import App from "../App";

export const routes = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>error...</div>,
    children: [
      {
        path: "/",
        element: <LazyHome />,
      },
      {
        path: "/services",
        element: <LazyServices />,
      },
      {
        path: "/projects",
        element: <LazyProjects />,
      },
      {
        path: "/about",
        element: <LazyAbout />,
      },
    ],
  },
]);
