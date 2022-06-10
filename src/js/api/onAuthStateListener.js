import auth from './firebase/firebase_app';
import { onAuthStateChanged } from 'firebase/auth';
import currentUser from '../../storage/currentUser';
onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in');
    console.log(user.displayName);
    currentUser.userName = user.displayName;
    currentUser.userEmail = user.email;
    currentUser.userUiid = user.uid;
  } else {
    console.log('User is signed out');
  }
});
