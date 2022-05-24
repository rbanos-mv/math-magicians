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
      <div id={this.id} className={this.class}>
        {this.text}
      </div>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
