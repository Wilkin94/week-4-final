// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type


// GRABBING ELEMENTS FROM HTML
const movieListEl = document.querySelector(`.movie-list`);
const searchInput = document.getElementById("searchInput");

// HANDILNG THE SEARCH
function onSearchResult(event) {
  getMovies(event.target.value);
}

// GLOBAL MOVIES VARIABLE
let currentMovies = []

// GETTING MOVIES / CALLING API
async function getMovies(searchTerm) {
  const response = await fetch(
    `https://www.omdbapi.com/?s=${searchTerm}&apikey=e5586477`
  );
  const data = await response.json();
  currentMovies = data.Search;
  displayMovies(currentMovies)
}

// DISPLAYING MOVIES
function displayMovies(movieList) {
movieListEl.innerHTML = movieList
.slice(0, 6)
.map((movie) => {
    return `
     <div class="movie-card">
     <div class="movie-card__container">
     <img class="movie__poster" src="${movie.Poster}" alt="">
     <p><b>Title:</b> ${movie.Title}</p>
     <p><b>Year:</b> ${movie.Year}</p>
     <p><b>Type:</b> ${movie.Type}</p>
     </div>
     </div>
     `;   
  }).join("");
}

// SORTING MOVIES
function sortChange(event) {
  const sortOption = event.target.value

  let sortedMovies = [...currentMovies]

  if (sortOption === "newest") {
sortedMovies.sort((a, b) => b.Year - a.Year)
  } else if (sortOption === "oldest") {
sortedMovies.sort((a, b) => a.Year - b.Year)
  }

  displayMovies(sortedMovies)
}
  
