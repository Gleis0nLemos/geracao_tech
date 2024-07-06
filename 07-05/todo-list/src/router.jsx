import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from "./components/Main";
import { ToDoList } from "./components/ToDoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/todos",
        element: <ToDoList />
      }
    ]
  }
])