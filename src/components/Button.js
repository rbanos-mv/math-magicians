import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.className = props.className;
    this.text = props.text;
  }

  render() {
    return (
      <button type="button" id={this.id} className={this.className}>
        {this.text}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
