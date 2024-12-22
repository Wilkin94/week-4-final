// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type
const movieListEl = document.querySelector(`.movie-list`);
let title = '';

async function getMovies() {
  const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies");
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
}


getMovies();

function showUserMovies(movie) {
  console.log(movie);
}

function movieHTML(movie) {
  return `<div class="movie-card" onclick="showUserMovies(${movie.id})">
                  <div class="movie-card__container">
                  <img class="movie__poster" src="${movie.Poster}" alt="">
                    <h3><b>Title:</b> ${movie.Title}</h3>
                    <p><b>Year:</b> ${movie.Year}</p>
                  </div>
                </div>`;
}
