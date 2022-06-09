import { auth, provider } from './firebase_app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
const auth = getAuth();

import currentUser from '../../storage/currentUser';

function logIn(email, password) {
  console.log('login API');
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function signUp(email, password) {
  console.log('signup API');
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function logInByGoogle() {
  console.log('login Google API');
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
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

export default { logIn, signUp, logInByGoogle, logOut };
