import capitalise from '../src/capitalise';

test('capitalise', () => {
    expect(capitalise('test')).toBe('Test');
});
