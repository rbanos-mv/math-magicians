import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Result from './Result';
import calculate from '../logic/calculate';

const Calculator = (props) => {
  const { previous, operand, current } = props;
  const [total, setTotal] = React.useState(previous);
  const [operation, setOperation] = React.useState(operand);
  const [next, setNext] = React.useState(current);

  const update = (buttonPress) => {
    const calculation = calculate({ total, operation, next }, buttonPress);
    setTotal(calculation.total);
    setOperation(calculation.operation);
    setNext(calculation.next);
  };

  const buttons = [
    { id: 'all-clear', className: 'digit', text: 'AC' },
    { id: 'plus-minus', className: 'digit', text: '±' },
    { id: 'mod', className: 'digit', text: '%' },
    { id: 'division', className: 'operation', text: '÷' },
    { id: 'n7', className: 'digit', text: '7' },
    { id: 'n8', className: 'digit', text: '8' },
    { id: 'n9', className: 'digit', text: '9' },
    { id: 'multiplication', className: 'operation', text: '×' },
    { id: 'n4', className: 'digit', text: '4' },
    { id: 'n5', className: 'digit', text: '5' },
    { id: 'n6', className: 'digit', text: '6' },
    { id: 'subtraction', className: 'operation', text: '-' },
    { id: 'n1', className: 'digit', text: '1' },
    { id: 'n2', className: 'digit', text: '2' },
    { id: 'n3', className: 'digit', text: '3' },
    { id: 'addition', className: 'operation', text: '+' },
    { id: 'n0', className: 'digit', text: '0' },
    { id: 'point', className: 'digit', text: '.' },
    { id: 'equal', className: 'operation', text: '=' },
  ];

  return (
    <div className="grid-container">
      <Result id="result" text="0" previous={total} operand={operation} current={next} />
      {buttons.map((btn) => (
        <Button
          key={btn.id}
          id={btn.id}
          className={btn.className}
          text={btn.text}
          buttonClick={(string) => update(string)}
        />
      ))}
    </div>
  );
};

Calculator.propTypes = {
  previous: PropTypes.string.isRequired,
  operand: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};

export default Calculator;
