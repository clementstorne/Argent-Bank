/** Style */
import "../main.scss";

/** Components */
import Navbar from "../components/Navbar";
import SignInForm from "../components/SignInForm";
import Footer from "../components/Footer";

/**
 * Component for showing the sign in page.
 * @component
 */
export default function SignIn() {
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
