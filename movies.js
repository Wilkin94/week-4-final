// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type
const movieListEl = document.querySelector(`.movie-list`);
const searchInput = document.getElementById("searchInput");

async function getMovies() {
  const movies = await fetch("https://www.omdbapi.com/?s=batman&apikey=e5586477");
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("");
  console.log(moviesData);
}

getMovies();

function onSearchResult(event) {
  console.log(event.target.value);
}

function movieHTML(movie) {
  return `<div class="movie-card" onclick="">
                  <div class="movie-card__container">
                  <img class="movie__poster" src="${movie.Poster}" alt="">
                    <p><b>Title:</b> ${movie.Title}</p>
                    <p><b>Year:</b> ${movie.Year}</p>
                    <p><b>Type:</b> ${movie.Type}</p>
                  </div>
                </div>`;
}
