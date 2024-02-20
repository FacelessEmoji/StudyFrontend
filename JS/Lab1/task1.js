function age(n) {
    if (n>=0 && n <=2){
        return "Младенец"
    } else if (n>2 && n <= 13){
        return "Ребенок"
    } else if (n>13 && n <= 19){
        return "Подросток"
    } else if (n>19 && n <= 65){
        return "Взрослый"
    } else if (n>=66){
       return "Пожилой"
    } else return "Возраст должен быть больше 0!"
}

console.log(age(20))
console.log(age(1))
console.log(age(100))