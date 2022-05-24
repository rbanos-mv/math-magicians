import React from 'react';
import Button from './Button';
import Result from './Result';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <Result id="result" text="0" />

        <Button id="all-clear" class="digit" text="AC" />
        <Button id="plus-minus" class="digit" text="±" />
        <Button id="percent" class="digit" text="%" />
        <Button id="division" class="operation" text="÷" />

        <Button id="n7" class="digit" text="7" />
        <Button id="n8" class="digit" text="8" />
        <Button id="n9" class="digit" text="9" />
        <Button id="multiplication" class="operation" text="×" />

        <Button id="n4" class="digit" text="4" />
        <Button id="n5" class="digit" text="5" />
        <Button id="n6" class="digit" text="6" />
        <Button id="subtraction" class="operation" text="-" />

        <Button id="n1" class="digit" text="1" />
        <Button id="n2" class="digit" text="2" />
        <Button id="n3" class="digit" text="3" />
        <Button id="addition" class="operation" text="+" />

        <Button id="n0" class="digit" text="0" />
        <Button id="point" class="digit" text="." />
        <Button id="equal" class="operation" text="=" />
      </div>
    );
  }
}

export default Calculator;
