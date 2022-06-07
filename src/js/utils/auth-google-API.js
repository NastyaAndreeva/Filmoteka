import { auth, db } from './firebase_app'
import { myUser } from './user';
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';

onAuthStateChanged(auth, user => {
    if (user) {
        console.log('User is signed in');
        console.log(user.displayName);
        myUser.user_name = user.displayName;
        myUser.user_email = user.email;
        myUser.user_uiid = user.uid;
        myUser.is_auth = true;
        onSnapshot(
            doc(db, "users", user.uid),
            (doc) => {
                console.log("Current data: ", doc.data());
                myUser.movieLists = doc.data();
            });
    } else {
        console.log('User is signed out');
    }
});

export { myUser };


// function addDocument(queue = [], watched = []) {
//     console.log('add API');
//     setDoc(doc(db, 'users', User.user_uiid), {
//         name: myUser.user_name,
//         email: myUser.user_email,
//         queue: queue,
//         watched: watched,
//     });
// }

// async function getDocument() {
//     const docRef = doc(db, 'users', User.user_uiid);
//     const docSnap = await getDoc(docRef);

//     if (docSnap.exists()) {
//         return { queue: docSnap.data().queue, watched: docSnap.data().watched };
//     } else {
//         console.log('No such document!');
//     }
// }