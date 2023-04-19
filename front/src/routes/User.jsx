import "../main.scss";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Navbar from "../components/Navbar";
import Account from "../components/Account";
import Footer from "../components/Footer";

import UserService from "../services/UserService";
import { userLogin } from "../store/features/userSlice";

export default function User() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);

  useEffect(() => {
    UserService.getUserData(token)
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
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
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
