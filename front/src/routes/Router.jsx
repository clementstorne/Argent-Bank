/** React Router */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** Views */
import App from "./App";
import SignIn from "./SignIn";
import User from "./User";

/** Components */
import AuthGuard from "../components/AuthGuard";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={
            <AuthGuard>
              <User />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
