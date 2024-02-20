function isLeap(n) {
   return (n % 4 === 0 &&  n % 100 !==0) || (n%400===0) ? "yes": "no"
}

console.log(isLeap(1984))
console.log(isLeap(2003))
console.log(isLeap(4))
// console.log(isLeap(400))
