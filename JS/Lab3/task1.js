function updateList(list) {
    let oldSum = 0;
    let newSum = 0;
    for (const el of list) {
        oldSum += el
    }

    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            list[i] = list[i] + i
        } else if (list[i] % 2 === 1) {
            list[i] = list[i] - i
        }
        newSum = newSum + list[i]
    }
    console.log(list)
    console.log(oldSum)
    console.log(newSum)
    return list, oldSum, newSum
}

updateList([5, 15, 23, 56, 35])
updateList([-5, 11, 3, 0, 2])