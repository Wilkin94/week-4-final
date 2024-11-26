// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies
// https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&type

async function movies() {
    const movies = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=e5586477&s=movies')
    const moviesData = await movies.json();
    
    moviesData.Search.map( 
            (movie) => `<div class="movie__row">
    <div class="movie__container">
    <div class="movie__img">
        <img src="./assets/Guardians of the Galaxy.jpg" alt="">
    </div>
    <p><b>Title:</b> Guardians of the Galaxy</p>
    <p><b>Year:</b> 2017</p>
    <p><b>Type:</b> Movie</p>
    </div>
</div>`
    )
    .join("");
    
}


movies();