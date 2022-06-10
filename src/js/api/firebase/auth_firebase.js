import app from './firebase_app';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
const auth = getAuth(app);

import currentUser from '../../storage/currentUser';

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in');
    console.log(user.email);
    console.log(user.uid);
    currentUser.userName = user.displayName;
    currentUser.userEmail = user.email;
    currentUser.userUiid = user.uid;
  } else {
    console.log('User is signed out');
  }
});

async function logIn(email, password) {
  console.log('login API');
  return await signInWithEmailAndPassword(auth, email, password);
}

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // document.getElementById('quickstart-sign-in').disabled = false;
      });
  }
  //   document.getElementById('quickstart-sign-in').disabled = true;
}

async function signUp(email, password) {
  console.log('signup API');
  return await createUserWithEmailAndPassword(auth, email, password);
}

async function logInByGoogle() {
  console.log('login Google API');
  const provider = new GoogleAuthProvider();
  return await signInWithRedirect(auth, provider);
  // return getRedirectResult(auth);
}
function logOut() {
  console.log('logout API');
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful');
    })
    .catch(error => {
      console.log('Sign-out error', error);
    });
}

export default { toggleSignIn, logIn, signUp, logInByGoogle, logOut };
