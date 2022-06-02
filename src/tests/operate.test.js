import operate from '../logic/operate';

describe('Test the operate functions', () => {
  it('adds two values', () => {
    const result = operate(5, 4, '+');
    expect(result).toEqual('9');
  });

  it('substract the value in the second parameter from value in the first parameter', () => {
    const result = operate(5, 2, '-');
    expect(result).toEqual('3');
  });

  it('multiplies two values', () => {
    const result = operate(5, 4, '×');
    expect(result).toEqual('20');
  });

  it('divides the value in the first parameter by the value in the second parameter', () => {
    const result = operate(20, 4, '÷');
    expect(result).toEqual('5');
  });

  it('returns an error when dividing by zero', () => {
    const result = operate(20, 0, '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('returns the remainder of dividing the value in the first parameter by the value in the second parameter', () => {
    const result = operate(20, 4, '%');
    expect(result).toEqual('0');
  });

  it('returns an error when dividing by zero with the modulo operator', () => {
    const result = operate(20, 0, '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });
});
