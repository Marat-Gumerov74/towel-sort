// You should implement your task here.


module.exports = function towelSort(matrix = []) {

    if (!matrix) return [];

    return matrix.reduce((acc, cV, index) => {

        if (index % 2 !== 0) cV.reverse();

        acc.push(cV);

        return acc;

    }, []).flat();
};
