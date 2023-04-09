import { createBrowserRouter } from "react-router-dom";

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
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

export default router;
