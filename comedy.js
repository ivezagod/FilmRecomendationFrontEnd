serverName = "http://localhost:8082/";
var filmBoxes = document.querySelectorAll(" .singleFilm img");
var lightbox = document.querySelector(".lightbox");
var lightboxImg = document.querySelector(".lightbox img");
var lightboxTitle = document.querySelector(".lightbox h3");
var lightboxDescription = document.querySelector(".lightbox .description");
var lightboxDuration = document.querySelector(".lightbox h4");

const comedyMovies = async () => {
  try {
    const response = await axios.get(serverName + "api/moviesByGenre", {
      params: {
        id: 50,
        genre_id:2
      }
    });
console.log(response);
    const movies = response.data;
    const movieTitle = movies.map(({title}) => title);

    const comedyFilms = document.querySelectorAll(".singleFilm");

    comedyFilms.forEach(function(comedyFilm, index){
      const comedyTitle = document.createElement("h3");
      comedyTitle.innerText = movieTitle[index];
      comedyFilm.appendChild(comedyTitle);

      const movieUrl = movies.map(({Url}) => Url);
      const comedyImages = document.querySelectorAll(".singleFilm img");


    comedyImages.forEach(function(comedyImage, index) {
      comedyImage.setAttribute("src", "http://localhost:8082/" + movieUrl[index])})

      comedyFilm.addEventListener("click", function() {
        const movieUrl = movies[index].Url;
        const movieDescription = movies[index].description
        const movieDuration = movies[index].runtime
        lightboxImg.setAttribute("src", serverName + movieUrl);
        lightboxTitle.innerText = movieTitle[index];
        lightboxDescription.innerText = `Description:   ${movieDescription} `;
        lightboxDuration.innerText = `Duration: ${movieDuration} `;
        lightbox.classList.remove("hidden");
      });
    });

    filmBoxes.forEach(function(filmBox) {
      filmBox.addEventListener("click", function() {
        var overlay = document.querySelector(".overlay").classList.remove("hidden");
      });
      document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
          var overlay = document.querySelector('.overlay').classList.add('hidden');
          var lightbox = document.querySelector('.lightbox').classList.add('hidden');
          console.log('Escape key pressed');
        }
      });
    });

    var closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", function() {
      var overlay = document.querySelector(".overlay").classList.add("hidden");
      lightbox.classList.add("hidden");

    });

    return movies;
  } catch (errors) {
    console.error(errors);
  }
};

comedyMovies();

var burgerMenu = document.querySelector(".burgerMenu")
var linksForBurger = document.querySelector(".linksForBurger")

burgerMenu.addEventListener("click",function(){
  linksForBurger.classList.toggle("hidden")

})