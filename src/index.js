import {
  getDataMovies,
  getMoreDataMovies,
  getTrendingMoviesData,
  getMoreTrendingMoviesData,
  getGenresIds,
} from './js/movie-fetch';

import itemsTemplate from './templates/list-of-card.hbs';

const gallery = document.querySelector('.gallery');

async function generateMurkup() {
  const moviesData = await getTrendingMoviesData();
  const genres = await getGenresIds();

  // Создание объекта в котором хранится информация для Handlebars
  const movieCategories = moviesData.results.map(movie => {
    const catArr = [];
    const dataRelease = movie.release_date.slice(0, 4);
    const nameOfFilm = movie.title.toUpperCase();
    const movieInfo = {
      name: nameOfFilm,
      release: dataRelease,
      id: movie.id,
      genres: catArr,
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
    };

    // Сравнивает жанры из массива жанров с id жанров из общего запроса и добавляет нужные в объект для Handlebars
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

  // Создание разметки
  gallery.insertAdjacentHTML('beforeend', itemsTemplate(movieCategories));
}



generateMurkup();

import { myUser } from './js/utils/auth-google-API';

document.querySelector('.header-library__btnQue').addEventListener('click', () => {
  console.log(userMovies.queue);
});
document.querySelector('.header-library__btnWatc').addEventListener('click', () => {
  console.log(userMovies.wathced);
});
document.querySelector('.theme').addEventListener('click', () => {
  myUser.addToQueue(Math.random());
  // console.log(object);
})

//!-- need to delete
//From temp partial
const container = document.querySelector('.container');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');
const add_queue = document.querySelector('.add_queue');
const add_watched = document.querySelector('.add_watched');
const get = document.querySelector('.get');
const stat = document.querySelector('.stat');
//--END from temp partial

//login click callback
function onLoginClick() {
  console.log('login');
  myUser.logInByGoogle();
  // authGoogleAPI
  //   .LogInByGoogle()
  //   .then(result => {
  //     const user = result.user;
  //     console.log(user);
  //     console.log(user.displayName);
  //   })
  //   .catch(error => {
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //     console.log('catch ', error, 'credential ', credential);
  //   });
}
//Вход
login.addEventListener('click', onLoginClick);
//Выход
logout.addEventListener('click', () => {
  console.log('logout');
  myUser.logOut();
});
//Запись в базу данных
add_queue.addEventListener('click', () => {
  console.log('add queue');
  myUser.addToQueue(Math.random());
  // Передаем методу два массива - первый очередь, второй просмотренные
  // authGoogleAPI.addDocument([1, 2, 3], [4, 5, 6]);
});
add_watched.addEventListener('click', () => {
  console.log('add watched');
  myUser.addToWatched(Math.random());
});
//Выборка данных из базы
get.addEventListener('click', () => {
  console.log('get');
  const usr = authGoogleAPI.getDocument();
  //Получаем промис с результатом в виде объекта с двумя массивами - очередь и просмотренные
  usr
    .then(result => {
      console.log('Result ', result);
    })
    .catch(error => {
      console.log(error);
    });
});
//!END -- need to delete
stat.addEventListener('click', () => {
  console.log('stat');
  console.log(myUser);
});

// UserClass.authStateListener();