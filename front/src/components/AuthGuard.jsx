/** React Router */
import { Navigate } from "react-router-dom";

/** Services */
import AuthService from "../services/AuthService";

/**
 * Component for limiting access to pages when the user is not logged in.
 * @component
 * @param   {HTMLElement}  children  The content to limit the access to.
 */
export default function AuthGuard({ children }) {
  const isAuth = AuthService.isLogged();
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return children;
}
