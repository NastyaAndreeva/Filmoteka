// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAN-5I6EVm1JCDsJFVlHPFOnqDlUOfsbaw',
  authDomain: 'filmoteka-98189.firebaseapp.com',
  databaseURL:
    'https://filmoteka-98189-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'filmoteka-98189',
  storageBucket: 'filmoteka-98189.appspot.com',
  messagingSenderId: '437648861220',
  appId: '1:437648861220:web:0545ac1cdbb5bb833190b1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth();
let user_name = '';
let user_email = '';

// Get from your database
async function getUsers(db) {
  const usersCol = collection(db, 'users');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList;
}

// const users = getUsers(db);
// users.then(users => {
//   console.log(users);
// });

login.addEventListener('click', () => {
  signInWithRedirect(auth, provider);
  getRedirectResult(auth)
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
});

onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
    console.log('User is signed in', uid);
    console.log(user);
    console.log(user.displayName);
    user_name = user.displayName;
    user_email = user.email;
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }
});

// add.addEventListener('click', () => {
//   // Add a new document in collection "cities"
//   setDoc(doc(db, 'users', user_name), {
//     name: user_name,
//     email: user_email,
//     queue: [],
//     watched: [],
//   });
// });
