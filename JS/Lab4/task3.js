function makeMatrix(n){
    for (let i = 0; i < n; i++) {
        console.log(Array(n).fill(n).join(" "))
    }
}

makeMatrix(3)
makeMatrix(7)
makeMatrix(2)