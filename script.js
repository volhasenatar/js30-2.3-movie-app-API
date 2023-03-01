async function getData() {
  const url =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
  const res = await fetch(url);
  const data = await res.json();
  showFilms(data);
}
getData();

function showFilms(data) {
  for (let i = 0; i < data.results.length; i++) {
    const main = document.querySelector('main');
    let movie = document.createElement('div');
    movie.className = 'movie';
    main.appendChild(movie);

    let image = document.createElement('img');
    movie.appendChild(image);

    let movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';
    movie.appendChild(movieInfo);

    let movieName = document.createElement('h3');
    movieInfo.appendChild(movieName);

    let rating = document.createElement('span');
    rating.className = 'orange';
    movieInfo.appendChild(rating);

    let overview = document.createElement('div');
    overview.className = 'overview';
    movie.appendChild(overview);

    let h2 = document.createElement('h2');
    overview.appendChild(h2);

    let spanOverview = document.createElement('span');
    overview.appendChild(spanOverview);

    const api = {
      key: 'https://image.tmdb.org/t/p/w1280',
      keyImg: data.results[i].poster_path,
      keyMovieName: data.results[i].original_title,
      keyRating: data.results[i].vote_average,
      keyOverview: data.results[i].overview,
    };

    image.src = api.key + api.keyImg;
    movieName.textContent = api.keyMovieName;
    rating.textContent = api.keyRating;
    spanOverview.textContent = api.keyOverview;
    h2.textContent = 'Overview';
  }
}
/* search movies*/

async function searchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=spring&api_key=3fd2be6f0c70a2a598f084ddfb75487c`
  );
  if (response.ok) {
    const data = await response.json();
    showFilms(data);
  }
}
const input = document.querySelector('#search');
input.addEventListener('keypress', (e) => {
  //e.preventDefault();
  if (e.keyCode === 13) searchMovies();
});
