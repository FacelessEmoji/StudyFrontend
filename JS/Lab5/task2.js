function getTownsInfo(arrayOfTowns) {
    for (const town of arrayOfTowns) {
        const townObject = {
            town: town.split(" | ")[0],
            latitude: town.split(" | ")[1],
            longitude: town.split(" | ")[2]
        }
        console.log(townObject)
    }
}

getTownsInfo(['Moscow | 55.7522 | 37.6156', 'Beijing | 39.913818 | 116.363625'])