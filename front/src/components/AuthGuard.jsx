import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AuthGuard({ children }) {
  const isAuth = useSelector((state) => state.login.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
}
