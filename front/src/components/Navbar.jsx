/** Style */
import "../main.scss";

/** React */
import { useEffect } from "react";

/** React Router */
import { Link, useNavigate } from "react-router-dom";

/** Store */
import { useSelector, useDispatch } from "react-redux";
import { userLogin, userLogout } from "../store/userSlice";

/** Services */
import UserService from "../services/UserService";
import AuthService from "../services/AuthService";

/** Assets */
import logo from "../assets/argentBankLogo.png";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let firstName = useSelector((state) => state.user.firstName);
  let isAuth = AuthService.isLogged();

  function handleLogout(e) {
    e.preventDefault();

    AuthService.logout();
    dispatch(userLogout());
    navigate("/");
  }

  useEffect(() => {
    if (isAuth) {
      UserService.getUserData()
        .then((res) => {
          dispatch(userLogin(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });

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
      <div className="main-nav-list">
        {isAuth === false ? (
          <Link to={"/login"} className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
        ) : (
          <>
            <Link to={"/profile"} className="main-nav-item">
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
