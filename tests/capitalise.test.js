import capitalise from '../src/capitalise';

test('Returns a given string with the first letter capitalised', () => {
    expect(capitalise('test')).toBe('Test');
});
