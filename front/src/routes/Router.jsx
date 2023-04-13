import { Route, createBrowserRouter } from "react-router-dom";

import App from "./App";
import SignIn from "./SignIn";
import User from "./User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <UserErrorPage />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/profile",
    element: <User />,
  },
]);

export default router;
