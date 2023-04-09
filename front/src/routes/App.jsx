import "../main.scss";

import IconChat from "../assets/icon-chat.png";
import IconMoney from "../assets/icon-money.png";
import IconSecurity from "../assets/icon-security.png";

import { Component } from "react";

import Navbar from "../components/Navbar";
import FeatureItem from "../components/FeatureItem";
import Footer from "../components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <div className="hero">
            <section className="hero-content">
              <h2 className="sr-only">Promoted Content</h2>
              <p className="subtitle">No fees.</p>
              <p className="subtitle">No minimum deposit.</p>
              <p className="subtitle">High interest rates.</p>
              <p className="text">
                Open a savings account with Argent Bank today!
              </p>
            </section>
          </div>
          <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
              title="You are our #1 priority"
              icon={IconChat}
              text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            />
            <FeatureItem
              title="More savings means higher rates"
              icon={IconMoney}
              text="The more you save with us, the higher your interest rate will be!"
            />
            <FeatureItem
              title="Security you can trust"
              icon={IconSecurity}
              text="We use top of the line encryption to make sure your data and money is always safe."
            />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
