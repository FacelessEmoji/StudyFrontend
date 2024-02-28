function sum(n) {
    let sum = 0;
    for (const number of String(n).split("").map(Number)) {
        sum += number;
    }
    return sum;
}

console.log(sum(245678))
console.log(sum(97561))
console.log(sum(543))