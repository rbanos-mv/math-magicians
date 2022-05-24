import PropTypes from 'prop-types';
import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.text = props.text;
  }

  render() {
    return <div id={this.id}>{this.text}</div>;
  }
}

Result.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Result;
