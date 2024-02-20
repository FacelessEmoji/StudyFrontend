function round(number, digit) {
    return parseFloat(number.toFixed(digit > 15 ? 15 : digit))
}

console.log(round(3.1415926535897932384626433832795, 2))
console.log(round(10.5, 3))