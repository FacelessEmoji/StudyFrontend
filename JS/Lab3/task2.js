function findCommon(firstList, secondList) {
    let output = new Set()
    for (const firstListElement of firstList) {
        for (const secondListElement of secondList) {
            if (firstListElement === secondListElement){
                output.add(secondListElement)
            }
        }
    }
    for (const outputElement of output) {
        console.log(outputElement)
    }
}
// console.log(5%4)
findCommon(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
findCommon(['R', 'u', 's', 's', 'i', 'a'], ['R', 'u', 't'])