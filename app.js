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
        found == undefined ? console.log("Lo sentimos, no está disponible.") : console.log(found)

    },
      searchMoviesByGenre: function(genero){
        let foundGenre = this.movies.filter(peliculas => peliculas.genre == genero)

        foundGenre.length == 0 ? console.log("No tenemos de esas ") : console.log(foundGenre)

      }
    
}
moviesDH.listMovies()
console.log("🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈")
moviesDH.searchMovies(2)
moviesDH.searchMovies("Coco")    
console.log("🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈")
moviesDH.searchMoviesByGenre("Suspesnso")
moviesDH.searchMoviesByGenre("acción")
console.log("🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈")
console.log("🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈")
console.log("🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈")
moviesDH.searchMovies(5)
moviesDH.searchMovies(3)
moviesDH.searchMovies(6)