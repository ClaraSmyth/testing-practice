const caesarCipher = (string, key = 1) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const stringArr = string.toLowerCase().split('');
    let result = '';

    stringArr.forEach((char) => {
        result += /[a-zA-Z]/.test(char) ? chars[(chars.indexOf(char) + key) % 26] : char;
    });

    return result;
};

export default caesarCipher;
