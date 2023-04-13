import "../main.scss";

import logo from "../assets/argentBankLogo.png";

import { Component } from "react";
import { Link } from "react-router-dom";

/**
 * Component for showing navbar.
 * @component
 * @extends Component
 */
class Navbar extends Component {
  /**
   * Creates the navbar.
   */
  constructor(props) {
    super(props);
  }
  render() {
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
          <Link to={"/login"} className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </Link>
          {/* <Link to={"/"} className="main-nav-item">
            <i class="fa fa-sign-out"></i> Sign Out
          </Link> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
