import caesarCipher from '../src/caesarCipher';

test('Encrypts a string using caesar cipher', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Encrypts a string using caesar cipher and a key', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc');
});
