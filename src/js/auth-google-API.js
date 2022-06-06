// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
// Initialize Firebase
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
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const auth = getAuth();
const User = {
  user_name: '',
  user_email: '',
  user_uiid: '',
};

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('User is signed in');
    console.log(user.displayName);
    User.user_name = user.displayName;
    User.user_email = user.email;
    User.user_uiid = user.uid;
  } else {
    console.log('User is signed out');
  }
});

function LogInByGoogle() {
  console.log('login API');
  signInWithRedirect(auth, provider);
  return getRedirectResult(auth);
}
function LogOut() {
  console.log('logout API');
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful');
    })
    .catch(error => {
      console.log('Sign-out error', error);
    });
}
function addDocument(queue = [], watched = []) {
  console.log('add API');
  setDoc(doc(db, 'users', User.user_uiid), {
    name: User.user_name,
    email: User.user_email,
    queue: queue,
    watched: watched,
  });
}

async function getDocument() {
  const docRef = doc(db, 'users', User.user_uiid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { queue: docSnap.data().queue, watched: docSnap.data().watched };
  } else {
    console.log('No such document!');
  }
}

export default { User, LogInByGoogle, LogOut, addDocument, getDocument };