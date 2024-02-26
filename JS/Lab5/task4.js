function getMoviesInfo(list) {
    let movieList = []
    for (const listElement of list) {
        if (listElement.includes('addMovie')) {
            const movie = {
                name: listElement.substring('addMovie'.length + 1),
                director: undefined,
                date: undefined,
            }
            movieList.push(movie)
        } else if (listElement.includes('directedBy')) {
            let wordsList = listElement.split(" ")
            let commandIndex = wordsList.indexOf('directedBy')
            const movieIndex = movieList.findIndex(movie => movie.name === wordsList.slice(0, commandIndex).join(" "))
            if (movieIndex === -1) {
                const newMovie = {
                    name: wordsList.slice(0, commandIndex).join(" "),
                    director: movieList.slice(commandIndex + 1).join(" "),
                    date: undefined,
                }
                movieList.push(newMovie)
            } else movieList[movieIndex].director = wordsList.slice(commandIndex + 1).join(" ")
        } else if (listElement.includes('onDate')) {
            let wordsList = listElement.split(" ")
            let commandIndex = wordsList.indexOf('onDate')
            const movieIndex = movieList.findIndex(movie => movie.name === wordsList.slice(0, commandIndex).join(" "))
            if (movieIndex === -1) {
                const newMovie = {
                    name: wordsList.slice(0, commandIndex).join(" "),
                    director: undefined,
                    date: movieList.slice(commandIndex + 1).join(" "),
                }
                movieList.push(newMovie)
            } else movieList[movieIndex].date = wordsList.slice(commandIndex + 1).join(" ")
        }
    }
    movieList.filter(movie => movie.name && movie.director && movie.date).forEach(movie => console.log(movie));
}

getMoviesInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])