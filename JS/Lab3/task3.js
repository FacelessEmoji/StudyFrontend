function reverseArray(list, rounds) {
    if (rounds > -1) {
        let rotations = 0;
        let shiftList = []
        if (rounds > list.length) {
            rotations = list.length - (rounds % list.length)
        } else rotations = list.length - rounds
        for (let i = (list.length - rotations); i < list.length; i++) {
            shiftList.push(list[i])
        }
        for (let i = 0; i < (list.length - rotations); i++) {
            shiftList.push(list[i])
        }
        console.log(shiftList)
    } else console.log("Incorrect rounds number!")
}

reverseArray([51, 47, 32, 61, 21], 2)
reverseArray([32, 21, 61, 1], 4)
reverseArray([2, 4, 15, 31], 5)
