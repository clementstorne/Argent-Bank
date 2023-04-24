/** Style */
import "../main.scss";

/** PropTypes */
import PropTypes from "prop-types";

/**
 * Component for showing a feature section on the main page.
 * @param   {String}      props.title  The title of the section.
 * @param   {MediaImage}  props.icon   The icon of the section.
 * @param   {String}      props.text   The text content of the section.
 * @component
 */
export default function FeatureItem(props) {
  return (
    <div className="feature-item">
      <img src={props.icon} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};
