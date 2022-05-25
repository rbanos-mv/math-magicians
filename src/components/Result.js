import PropTypes from 'prop-types';
import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id, previous, current, operand,
    } = this.props;
    return (
      <div id={id}>
        <span className="previous">{previous}</span>
        {' '}
        <span className="operand">{operand}</span>
        {' '}
        <span className="current">{current}</span>
      </div>
    );
  }
}

Result.defaultProps = {
  previous: '',
  operand: '',
  current: '0',
};

Result.propTypes = {
  id: PropTypes.string.isRequired,
  previous: PropTypes.string,
  operand: PropTypes.string,
  current: PropTypes.string,
};

export default Result;
