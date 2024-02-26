function divisibility(n) {
    let numbers = [10, 7, 6, 3, 2]
    let flag = false;
    numbers.some(function (number) {
        if (n % number === 0) {
            console.log(`Число делится на ${number}`)
            flag = true
            return true
        }
    })
    if (flag === false){
        console.log('Не делится')
    }
}

divisibility(30)
divisibility(15)
divisibility(12)
divisibility(1643)