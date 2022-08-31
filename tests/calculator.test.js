import calculator from '../src/calculator';

test('Adds a and b', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Subtracts b from a', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('Multiplies a by b', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
});

test('Divides a by b', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});
