// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type
const movieListEl = document.querySelector(`.movie-list`);
const searchInput = document.getElementById("searchInput");

function onSearchResult(event) {
  getMovies(event.target.value);
}

async function getMovies(searchTerm) {
  console.log("this is a searchTerm", searchTerm)
  const movies = await fetch("https://www.omdbapi.com/?s=${searchTerm}&apikey=e5586477");
  const moviesData = await movies.json();
  movieListEl.innerHTML = moviesData.Search.map((movie) => {
    return `
    <div class="movie-card" onclick="">
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




  
