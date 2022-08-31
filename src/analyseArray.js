const analyseArr = (arr) => {
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: arr.sort((a, b) => a + b)[0],
        max: arr.sort((a, b) => a - b)[arr.length - 1],
        length: arr.length,
    };
};

export default analyseArr;
