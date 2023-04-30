serverName = "http://localhost:8082/";
var filmBoxes = document.querySelectorAll(" .singleFilm img");
var lightbox = document.querySelector(".lightbox");
var lightboxImg = document.querySelector(".lightbox img");
var lightboxTitle = document.querySelector(".lightbox h3");
var lightboxDuration = document.querySelector(".lightbox h4");

var lightboxDescription = document.querySelector(".lightbox .description");

const actionMovies = async () => {
  try {
    const response = await axios.get(serverName + "api/moviesByGenre", {
      params: {
        id: 50,
        genre_id: 3
      }
    }); 


    const movies =(response.data);
    const movieTitle = movies.map(({title}) => title);

    const actionFilms = document.querySelectorAll(".singleFilm");

    actionFilms.forEach(function(actionFilm, index){
      const actionTitle = document.createElement("h3");
      actionTitle.innerText = movieTitle[index];
      actionFilm.appendChild(actionTitle);

      const movieUrl = movies.map(({Url}) => Url);
      const actionImages = document.querySelectorAll(".singleFilm img");


    actionImages.forEach(function(actionImage, index) {
      actionImage.setAttribute("src", "http://localhost:8082/" + movieUrl[index])})

      actionFilm.addEventListener("click", function() {
        const movieUrl = movies[index].Url;
        const movieDescription = movies[index].description
        const movieDuration = movies[index].runtime
        lightboxImg.setAttribute("src", serverName + movieUrl);
        lightboxTitle.innerText = movieTitle[index];
        lightboxDescription.innerText = `Description:   ${movieDescription} `;
        lightboxDuration.innerText = `Duration: ${movieDuration} `;

        // lightbox.append(movieDescription)
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
        }
      });
    });

    var closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", function() {
      var overlay = document.querySelector(".overlay").classList.add("hidden");

    });






    var closeBtn = document.querySelector(".close");

    closeBtn.addEventListener("click", function() {
      var overlay = document.querySelector(".overlay").classList.add("hidden");
      overlay.classList.add("hidden");

    });

    var firstPicture = document.querySelector(".imageContainer #first")
    var secondPicture = document.querySelector(".imageContainer #second")
    var thirdPicture = document.querySelector(".imageContainer #third")

    firstPicture.addEventListener("click",function(){
      var overlay = document.querySelector(".overlay").classList.remove("hidden");
      lightboxImg.setAttribute("src","./images/fastAndFurios.jpg")
      lightboxTitle.innerText = "Fast and Furios"
      lightboxDescription.innerText = "description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni quibusdam minima excepturi nostrum, earum dignissimos nemo sunt enim, voluptates necessitatibus ratione maiores ad libero ab, optio saepe aut cumque esse nulla debitis eum! Eos quis iusto repellendus nulla similique, fugit accusamus autem ipsam blanditiis exercitationem animi, distinctio placeat quibusdam."
      lightboxDuration.innerText="Duration: 2h"
    })
    secondPicture.addEventListener("click",function(){
      var overlay = document.querySelector(".overlay").classList.remove("hidden");
      lightboxImg.setAttribute("src","./images/itClown.jpg")
      lightboxTitle.innerText = "It"
      lightboxDescription.innerText = "description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni quibusdam minima excepturi nostrum, earum dignissimos nemo sunt enim, voluptates necessitatibus ratione maiores ad libero ab, optio saepe aut cumque esse nulla debitis eum! Eos quis iusto repellendus nulla similique, fugit accusamus autem ipsam blanditiis exercitationem animi, distinctio placeat quibusdam."
      lightboxDuration.innerText="Duration: 1h 30min"
    })
    thirdPicture.addEventListener("click",function(){
      var overlay = document.querySelector(".overlay").classList.remove("hidden");
      lightboxImg.setAttribute("src","./images/berserk.jpg")
      lightboxTitle.innerText = "Berserk"
      lightboxDescription.innerText = "description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni quibusdam minima excepturi nostrum, earum dignissimos nemo sunt enim, voluptates necessitatibus ratione maiores ad libero ab, optio saepe aut cumque esse nulla debitis eum! Eos quis iusto repellendus nulla similique, fugit accusamus autem ipsam blanditiis exercitationem animi, distinctio placeat quibusdam."
      lightboxDuration.innerText="Duration: 1h 30min"
    })

   
 } catch (errors) {
   console.error(errors);
 }
};

actionMovies()


var burgerMenu = document.querySelector(".burgerMenu")
var linksForBurger = document.querySelector(".linksForBurger")

burgerMenu.addEventListener("click",function(){
  linksForBurger.classList.toggle("hidden")

})









