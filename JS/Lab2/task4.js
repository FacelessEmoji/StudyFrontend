function calculator(number1, operator, number2) {
    let result;
    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                console.log("Ошибка: деление на ноль.");
                return;
            }
            break;
        default:
            console.log("Неверный оператор.");
            return;
    }
    console.log(result.toFixed(2));
}

calculator(5, '+', 10)
calculator(25.5, '-', 3)

