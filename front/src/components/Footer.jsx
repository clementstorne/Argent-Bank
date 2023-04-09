import "../main.scss";

import { Component } from "react";

/**
 * Component for showing footer.
 * @component
 * @extends Component
 */
class Footer extends Component {
  /**
   * Creates the footer.
   */
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    );
  }
}

export default Footer;
