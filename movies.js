// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type
const movieListEl = document.querySelector(`.movies-list`);
let title = '';

async function getMovies() {
  const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies");
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}

getMovies();

//my filter function
function filterMovies(event) {
  sortMovies(event.target.value) //ONLY JOB IS TO SEND TO SORT FUNCTION
}

async function sortMovies(filter) {
  if (filter === "Latest-Movies") {
      movieData.Search.sort((a, b) => parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4)));
  } else if (filter === "Oldest-Movies") {
      movieData.Search.sort((a, b) => parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4)));
  }

  movieListEl.innerHTML = movieData.Search.map((movie) => movieHTML(movie)).join("");
}

function movieHTML(movie) {
  return `<div class="movie-card">
                  <div class="movie-card__container">
                  <img class="movie__poster" src="${movie.Poster}" alt="">
                    <h3><b>Title:</b> ${movie.Title}</h3>
                    <p><b>Year:</b> ${movie.Year}</p>
                  </div>
                </div>`;
}
