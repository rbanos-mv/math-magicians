import PropTypes from 'prop-types';
import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    const { buttonClick, text } = this.props;
    buttonClick(text);
  }

  render() {
    const { id, className, text } = this.props;
    return (
      <button type="button" id={id} className={className} onClick={this.buttonClick}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
};

export default Button;
