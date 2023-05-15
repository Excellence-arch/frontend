import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import { About } from "./Pages/About";
import { Auth } from "./Pages/Auth";
import { Page404 } from "./Pages/Page404";
import { HomePage } from "./Pages/Dashboard/HomePage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/homepage",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
