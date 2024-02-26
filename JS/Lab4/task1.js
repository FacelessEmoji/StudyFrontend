function biggestOfThree(a,b,c) {
    return a < b && a < c ? a : b < a && b < c ? b : c
}

console.log(biggestOfThree(2,5,3))
console.log(biggestOfThree(600,342,123))
console.log(biggestOfThree(25,21,4))