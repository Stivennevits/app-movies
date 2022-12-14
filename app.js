let archivoMovies = require("./movies")

let moviesDH = {
    movies: archivoMovies,
      listMovies: function(){
        this.movies.forEach((pelicula,i) => {
            console.log((i + 1) + ". " + pelicula.title)
        })
    },
      searchMovies: function(parametro){
        let found = this.movies.find(peliculas => peliculas.id == parametro || peliculas.title == parametro);
        found == undefined ? console.log("Lo sentimos, no estΓ‘ disponible.") : console.log(found)

    },
      searchMoviesByGenre: function(genero){
        let foundGenre = this.movies.filter(peliculas => peliculas.genre == genero)

        foundGenre.length == 0 ? console.log("No tenemos de esas ") : console.log(foundGenre)

      }
    
}
moviesDH.listMovies()
console.log("ππππππππππππππππ")
moviesDH.searchMovies(2)
moviesDH.searchMovies("Coco")    
console.log("ππππππππππππππππ")
moviesDH.searchMoviesByGenre("Suspesnso")
moviesDH.searchMoviesByGenre("acciΓ³n")
console.log("ππππππππππππππππ")
console.log("ππππππππππππππππ")
console.log("ππππππππππππππππ")
moviesDH.searchMovies(5)
moviesDH.searchMovies(3)
moviesDH.searchMovies(6)
moviesDH.searchMovies(3)
console.log("ππππππππππππππππ")