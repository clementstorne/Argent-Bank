import "../main.scss";

import { Component } from "react";

import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";
import Footer from "../components/Footer";

class SignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <main className="main bg-dark">
          <SignInForm />
        </main>
        <Footer />
      </>
    );
  }
}

export default SignIn;
