import {
  getDataMovies,
  getMoreMoviesData,
  getTrendingMovies,
  getMoreTrendingMovies,
} from './movie-fetch';
import authGoogleAPI from './js/auth-google-API';

//From temp partial -- need to delete
const container = document.querySelector('.container');
const login = document.querySelector('.login');
const logout = document.querySelector('.logout');
const add = document.querySelector('.add');
//--END from temp partial -- need to delete

//login click
function onLoginClick() {
  console.log('login');
  authGoogleAPI
    .LogInByGoogle()
    .then(result => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // console.log('token ', token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      console.log(user.displayName);
    })
    .catch(error => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log('catch ', error, 'credential ', credential);
    });
}
login.addEventListener('click', onLoginClick);
logout.addEventListener('click', () => {
  console.log('logout');
  authGoogleAPI.LogOut();
});
