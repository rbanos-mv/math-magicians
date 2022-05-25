import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    const { previous, operand, current } = props;
    this.state = {
      total: previous,
      operation: operand,
      next: current,
    };
    this.update = this.update.bind(this);
  }

  update(buttonPress) {
    const calculation = calculate(this.state, buttonPress);
    this.setState(() => ({
      total: calculation.total,
      operation: calculation.operation,
      next: calculation.next,
    }));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="grid-container">
        <Result id="result" text="0" previous={total} operand={operation} current={next} />

        <Button
          id="all-clear"
          className="digit"
          text="AC"
          buttonClick={(string) => this.update(string)}
        />
        <Button
          id="plus-minus"
          className="digit"
          text="±"
          buttonClick={(string) => this.update(string)}
        />
        <Button
          id="percent"
          className="digit"
          text="%"
          buttonClick={(string) => this.update(string)}
        />
        <Button
          id="division"
          className="operation"
          text="÷"
          buttonClick={(string) => this.update(string)}
        />
        <Button id="n7" className="digit" text="7" buttonClick={(string) => this.update(string)} />
        <Button id="n8" className="digit" text="8" buttonClick={(string) => this.update(string)} />
        <Button id="n9" className="digit" text="9" buttonClick={(string) => this.update(string)} />
        <Button
          id="multiplication"
          className="operation"
          text="×"
          buttonClick={(string) => this.update(string)}
        />
        <Button id="n4" className="digit" text="4" buttonClick={(string) => this.update(string)} />
        <Button id="n5" className="digit" text="5" buttonClick={(string) => this.update(string)} />
        <Button id="n6" className="digit" text="6" buttonClick={(string) => this.update(string)} />
        <Button
          id="subtraction"
          className="operation"
          text="-"
          buttonClick={(string) => this.update(string)}
        />
        <Button id="n1" className="digit" text="1" buttonClick={(string) => this.update(string)} />
        <Button id="n2" className="digit" text="2" buttonClick={(string) => this.update(string)} />
        <Button id="n3" className="digit" text="3" buttonClick={(string) => this.update(string)} />
        <Button
          id="addition"
          className="operation"
          text="+"
          buttonClick={(string) => this.update(string)}
        />
        <Button id="n0" className="digit" text="0" buttonClick={(string) => this.update(string)} />
        <Button
          id="point"
          className="digit"
          text="."
          buttonClick={(string) => this.update(string)}
        />
        <Button
          id="equal"
          className="operation"
          text="="
          buttonClick={(string) => this.update(string)}
        />
      </div>
    );
  }
}

Calculator.propTypes = {
  previous: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default Calculator;
