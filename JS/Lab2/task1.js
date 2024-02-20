function sum(n) {
    let sum = 0; // Используем другое имя для суммы
    for (const number of String(n).split("").map(Number)) {
        sum += number; // Используем другое имя для суммы
    }
    return sum;
}

console.log(sum(245678))
console.log(sum(97561))
console.log(sum(543))