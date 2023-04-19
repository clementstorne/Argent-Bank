/** React Router */
import { Navigate } from "react-router-dom";

/** Services */
import AuthService from "../services/AuthService";

export default function AuthGuard({ children }) {
  const isAuth = AuthService.isLogged();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
