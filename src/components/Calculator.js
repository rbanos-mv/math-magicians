import React from 'react';
import Button from './Button';
import Result from './Result';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Result id="result" text="0" />

        <Button id="all-clear" className="digit" text="AC" />
        <Button id="plus-minus" className="digit" text="±" />
        <Button id="percent" className="digit" text="%" />
        <Button id="division" className="operation" text="÷" />

        <Button id="n7" className="digit" text="7" />
        <Button id="n8" className="digit" text="8" />
        <Button id="n9" className="digit" text="9" />
        <Button id="multiplication" className="operation" text="×" />

        <Button id="n4" className="digit" text="4" />
        <Button id="n5" className="digit" text="5" />
        <Button id="n6" className="digit" text="6" />
        <Button id="subtraction" className="operation" text="-" />

        <Button id="n1" className="digit" text="1" />
        <Button id="n2" className="digit" text="2" />
        <Button id="n3" className="digit" text="3" />
        <Button id="addition" className="operation" text="+" />

        <Button id="n0" className="digit" text="0" />
        <Button id="point" className="digit" text="." />
        <Button id="equal" className="operation" text="=" />
      </div>
    );
  }
}

export default Calculator;
