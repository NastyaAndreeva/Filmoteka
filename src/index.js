import {
  getDataMovies,
  getMoreMoviesData,
  getTrendingMovies,
  getMoreTrendingMovies,
} from './movie-fetch';
import authGoogleAPI from './js/auth-google-API';

//!-- need to delete
//From temp partial
const container = document.querySelector('.container');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');
const add = document.querySelector('.add');
const get = document.querySelector('.get');
//--END from temp partial

//login click callback
function onLoginClick() {
  console.log('login');
  authGoogleAPI
    .LogInByGoogle()
    .then(result => {
      const user = result.user;
      console.log(user);
      console.log(user.displayName);
    })
    .catch(error => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('catch ', error, 'credential ', credential);
    });
}
//Вход
login.addEventListener('click', onLoginClick);
//Выход
logout.addEventListener('click', () => {
  console.log('logout');
  authGoogleAPI.LogOut();
});
//Запись в базу данных
add.addEventListener('click', () => {
  console.log('add');
  // Передаем методу два массива - первый очередь, второй просмотренные
  authGoogleAPI.addDocument([1, 2, 3], [4, 5, 6]);
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
