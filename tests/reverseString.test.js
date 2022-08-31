import reverseString from '../src/reverseString';

test('Returns a given string in reverse order', () => {
    expect(reverseString('Test')).toBe('tseT');
});
