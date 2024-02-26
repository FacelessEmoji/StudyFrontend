function getWorkersInfo(list) {
    let workers = []
    for (const workerName of list) {
        const worker = {
            name: workerName,
            id: workerName.length,
            info: `Name: ${workerName} - Personal Number: ${workerName.length}`
        }
        console.log(worker.info)
    }
}

getWorkersInfo(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])