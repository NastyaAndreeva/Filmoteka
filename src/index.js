import {
  getDataMovies,
  getMoreDataMovies,
  getTrendingMoviesData,
  getMoreTrendingMoviesData,
  getGenresIds,
} from './js/movie-fetch';

// import { initLightbox } from './js/modal-film.js';
import itemsTemplate from './templates/list-of-card.hbs';

const form = document.querySelector("form");
const gallery = document.querySelector('#home-gallery');

async function generateMarkup() {
  const moviesData = await getTrendingMoviesData();

  // Creating an object that stores data for handlebars template
  const movieCategories = await generateMoviesWithGenres(moviesData);

  // Rendering markup
  // gallery.innerHTML = itemsTemplate(movieCategories);
}

async function onSearchSubmit(event) {
  event.preventDefault();

  const moviesData = await getDataMovies(event.currentTarget.elements.searchQuery.value);

  const movieCategories = await generateMoviesWithGenres(moviesData);

  // Rendering markup
  gallery.innerHTML = itemsTemplate(movieCategories);
}

async function generateMoviesWithGenres(data){
  const genres = await getGenresIds();

  // Creating an object that stores data for handlebars template
  return data.results.map(movie => {
    const catArr = [];
    const dataRelease = movie.release_date?.slice(0, 4) || 2022;
    const nameOfFilm = movie.title.toUpperCase();
    const movieInfo = {
      name: nameOfFilm,
      release: dataRelease,
      id: movie.id,
      genres: catArr,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    };

    // Comparing ganres taken from the general ganre array with IDs and adding ganres' values in the object for handlebars template
    const genresFilm = function () {
      movie.genre_ids.map(id =>
        genres.find(el => {
          if (el.id === id) {
            return catArr.push(el.name);
          }
        })
      );
    };

    genresFilm();
    return movieInfo;
  });
}

generateMarkup();

// form.addEventListener("submit", onSearchSubmit);

