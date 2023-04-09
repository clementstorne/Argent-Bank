import "../main.scss";

import PropTypes from "prop-types";
import { Component } from "react";

/**
 * Component for showing feature section.
 * @component
 * @extends Component
 */
class FeatureItem extends Component {
  /**
   * Creates a feature component.
   * @param   {String}      title  The title of the feature section.
   * @param   {MediaImage}  icon   The icon of the feature section.
   * @param   {String}      text   The content of the feature section.
   */
  constructor(props) {
    super(props);
    this.title = props.title;
    this.icon = props.icon;
    this.text = props.text;
  }
  render() {
    return (
      <div className="feature-item">
        <img src={this.icon} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{this.title}</h3>
        <p>{this.text}</p>
      </div>
    );
  }
}

FeatureItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeatureItem;
