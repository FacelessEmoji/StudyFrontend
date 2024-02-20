function calculate(amount, type, day) {
    let price = 0;
    let discount = 0;
    switch (type) {
        case 'Students':
            discount = amount >= 30 ? 15 : 0
            switch (day) {
                case 'Friday':
                    price = 8.45
                    break
                case 'Saturday':
                    price = 9.80
                    break
                case 'Sunday':
                    price = 10.46
                    break
            }
            break
        case 'Corporate':
            amount = amount >= 100 ? amount - 10 : amount
            switch (day) {
                case 'Friday':
                    price = 10.90
                    break
                case 'Saturday':
                    price = 15.60
                    break
                case 'Sunday':
                    price = 16
                    break
            }
            break
        case 'Regular':
            discount = (amount >= 10 && amount <= 20) ? 5 : 0
            switch (day) {
                case 'Friday':
                    price = 15
                    break
                case 'Saturday':
                    price = 20
                    break
                case 'Sunday':
                    price = 22.50
                    break
            }
            break
    }
    return `Общая цена: ${(price * amount * ((100 - discount) / 100)).toFixed(2)}`
}

console.log(calculate(30, "Students", "Sunday"))
console.log(calculate(40, "Regular", "Saturday"))