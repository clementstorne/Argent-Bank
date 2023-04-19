import "../main.scss";

import logo from "../assets/argentBankLogo.png";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AuthService from "../services/AuthService";
import { userLogout } from "../store/features/userSlice";
import { logout } from "../store/features/loginSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const firstName = useSelector((state) => state.user.firstName);
  const isAuth = useSelector((state) => state.login.isAuth);

  function handleLogout(e) {
    e.preventDefault();

    AuthService.logout();
    dispatch(userLogout());
    dispatch(logout());
    navigate("/login");
  }

  return (
    <nav className="main-nav">
      <Link to={`/`} className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuth === false ? (
          <Link to={"/login"} className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        ) : (
          <>
            <Link to={"/login"} className="main-nav-item">
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <Link to={"/"} className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
