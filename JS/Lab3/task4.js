function checkMatrix(matrix) {
    let flag = true;
    let checkSum = sum(matrix[0])
    let columnSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        flag = sum(matrix[i]) === checkSum
        for (let j = 0; j < matrix[i].length; j++) {
            columnSum += matrix[j][i];
        }
        flag = columnSum === checkSum
        columnSum = 0
    }

    console.log(flag)
}

function sum(list) {
    let totalSum = 0;
    for (const listElement of list) {
        totalSum += listElement
    }
    return totalSum
}

checkMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
checkMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
checkMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])