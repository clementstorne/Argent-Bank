/** Style */
import "../main.scss";

/** Helpers */
import CurrencyHelpers from "../helpers/CurrencyHelpers";

/** PropTypes */
import PropTypes from "prop-types";

/**
 * Component for showing an account on user's page.
 * @component
 * @param   {String}  props.title        The title of the account.
 * @param   {Number}  props.amount       The amount of the account.
 * @param   {String}  props.description  The description of the account.
 */
export default function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{props.title}</h3>
        <p className="account-amount">{CurrencyHelpers.usd(props.amount)}</p>
        <p className="account-amount-description">{props.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

Account.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
