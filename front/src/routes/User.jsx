/** Style */
import "../main.scss";

/** React */
import { useEffect } from "react";

/** Store */
import { useDispatch } from "react-redux";
import { userLogin } from "../store/userSlice";

/** Services */
import UserService from "../services/UserService";

/** Components */
import Navbar from "../components/Navbar";
import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";

/**
 * Component for showing the user's page.
 * @component
 */
export default function User() {
  const dispatch = useDispatch();

  useEffect(() => {
    UserService.getUserData()
      .then((res) => {
        dispatch(userLogin(res.data));
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount={2082.79}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount={10928.42}
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount={184.3}
          description="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
}
