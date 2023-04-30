serverName = "http://localhost:8082/";
var filmBoxes = document.querySelectorAll(" .singleFilm img");
var lightbox = document.querySelector(".lightbox");
var lightboxImg = document.querySelector(".lightbox img");
var lightboxTitle = document.querySelector(".lightbox h3");
var lightboxDescription = document.querySelector(".lightbox .description");
var lightboxDuration = document.querySelector(".lightbox h4");

const horrorMovies = async () => {
  try {
    const response = await axios.get(serverName + "api/moviesByGenre", {
      params: {
        id: 50,
        genre_id: 1
      }
    });

    const movies = response.data;
    const movieTitle = movies.map(({title}) => title);

    const horrorFilms = document.querySelectorAll(".singleFilm");

    horrorFilms.forEach(function(horrorFilm, index){
      const horrorTitle = document.createElement("h3");
      horrorTitle.innerText = movieTitle[index];
      horrorFilm.appendChild(horrorTitle);

      const movieUrl = movies.map(({Url}) => Url);
      const horrorImages = document.querySelectorAll(".singleFilm img");


    horrorImages.forEach(function(horrorImage, index) {
      horrorImage.setAttribute("src", "http://localhost:8082/" + movieUrl[index])})

      horrorFilm.addEventListener("click", function() {
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

horrorMovies();

var burgerMenu = document.querySelector(".burgerMenu")
var linksForBurger = document.querySelector(".linksForBurger")

burgerMenu.addEventListener("click",function(){
  linksForBurger.classList.toggle("hidden")

})