import caesarCipher from '../src/caesarCipher';

test('Encrypts a string using caesar cipher', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
});

test('Encrypts a string using caesar cipher and a key', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc');
});

test('Encrypts a string that has punctuation using caesar cipher', () => {
    expect(caesarCipher('abcdef,ghijklm?nopqr,stuvwxyz!')).toBe('bcdefg,hijklmn?opqrs,tuvwxyza!');
});

test('Encrypts a string that has capital letters using caesar cipher', () => {
    expect(caesarCipher('abcdEfghijklMnopqrStuvwxyZ')).toBe('bcdefghijklmnopqrstuvwxyza');
});
