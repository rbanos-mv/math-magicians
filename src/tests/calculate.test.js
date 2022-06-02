import calculate from '../logic/calculate';

describe('Test the calculate functions', () => {
  it('clears the result with the AC button', () => {
    const previous = {
      total: '100',
      operation: '',
      next: '',
    };
    const button = 'AC';
    const expected = {
      total: null,
      operation: null,
      next: null,
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('updates the number when a second number is pressed', () => {
    const previous = {
      total: null,
      next: '2',
    };
    const button = '3';
    const expected = {
      total: null,
      next: '23',
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('updates the number when a point is pressed', () => {
    const previous = {
      total: null,
      next: '2',
    };
    const button = '.';
    const expected = {
      total: null,
      next: '2.',
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('updates next when a number is pressed after an operation', () => {
    const previous = {
      total: '23',
      operation: '+',
      next: null,
    };
    const button = '6';
    const expected = {
      total: '23',
      operation: '+',
      next: '6',
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('updates next and clears total/operation when number is pressed after a result', () => {
    const previous = {
      total: '29',
      operation: null,
      next: null,
    };
    const button = '5';
    const expected = {
      total: null,
      next: '5',
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('calculates the result of the operation when pressing "="', () => {
    const previous = {
      total: '23',
      operation: '+',
      next: '6',
    };
    const button = '=';
    const expected = {
      total: '29',
      operation: null,
      next: null,
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('calculates the result of the operation when pressing another operator', () => {
    const previous = {
      total: '23',
      operation: '+',
      next: '6',
    };
    const button = '+';
    const expected = {
      total: '29',
      operation: '+',
      next: null,
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });

  it('complements the sign of the number', () => {
    const previous = {
      total: null,
      next: '29',
    };
    const button = '±';
    const expected = {
      total: null,
      next: '-29',
    };
    expect(calculate(previous, button)).toStrictEqual(expected);
  });
});
