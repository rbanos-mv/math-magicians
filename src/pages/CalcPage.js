import React from 'react';
import Calculator from '../components/Calculator';

const CalcPage = () => (
  <div className="calcpage">
    <h2>Let&apos;s do some math!</h2>
    <Calculator previous="" operand="" current="" solved={false} />
  </div>
);

export default CalcPage;
