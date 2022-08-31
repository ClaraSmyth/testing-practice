import analyseArr from '../src/analyseArray';

test('Returns an object with the following properties: average, min, max, length', () => {
    expect(analyseArr([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
