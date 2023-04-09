import "../main.scss";

import CurrencyHelpers from "../helpers/CurrencyHelpers";

import PropTypes from "prop-types";
import { Component } from "react";

/**
 * Component for showing feature section.
 * @component
 * @extends Component
 */
class Account extends Component {
  /**
   * Creates a feature section.
   * @param   {String}      title  The title of the feature section.
   * @param   {MediaImage}  icon   The icon of the feature section.
   * @param   {String}      text   The content of the feature section.
   */
  constructor(props) {
    super(props);
    this.title = props.title;
    this.amount = CurrencyHelpers.usd(props.amount);
    this.description = props.description;
  }
  render() {
    return (
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{this.title}</h3>
          <p className="account-amount">{this.amount}</p>
          <p className="account-amount-description">{this.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    );
  }
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Account;
