import { initializeApp } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
export const app = initializeApp({
  apiKey: 'AIzaSyAN-5I6EVm1JCDsJFVlHPFOnqDlUOfsbaw',
  authDomain: 'filmoteka-98189.firebaseapp.com',
  databaseURL:
    'https://filmoteka-98189-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-98189',
  storageBucket: 'filmoteka-98189.appspot.com',
  messagingSenderId: '437648861220',
  appId: '1:437648861220:web:0545ac1cdbb5bb833190b1',
});

import currentUser from '../../storage/currentUser';
console.log('Befor onAuthStateChanged');
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
// export const auth = getAuth();
export const db = getFirestore(app);
// export const provider = new GoogleAuthProvider();
