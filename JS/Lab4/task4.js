function showProgress(percent) {
    return percent === 100 ?
        `${percent}% Complete!\n[${"%".repeat(percent / 10)}${".".repeat((100 - percent) / 10)}]` :
        `${percent}% [${"%".repeat(percent / 10)}${".".repeat((100 - percent) / 10)}]\nStill loading... `
}

console.log(showProgress(30))
console.log(showProgress(50))
console.log(showProgress(100))
