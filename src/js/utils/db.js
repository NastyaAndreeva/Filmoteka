// import app from "./firebase_app";
// import { getFirestore, setDoc, doc, arrayUnion, onSnapshot } from 'firebase/firestore';
// import { UserClass } from './auth-google-API';

// const db = getFirestore(app);

// class UserMovies extends UserClass {

//     constructor(userId = 'user-id-1') {
//         super();
//         this.userId = userId;
//         this.movies = [];
//         this.setUserDataListener()
//     }
//     subscribeUserData() {
//         console.log('this.userId', this.userId);
//     }
//     setUserDataListener() {
//         onSnapshot(doc(db, "users", this.userId), (doc) => {
//             console.log("Current data: ", doc.data());
//             this.userData = doc.data();
//         });
//     }
//     addMovie(movie) {
//         this.movies.push(movie);
//     }

//     get queue() {
//         return this.userData.queue;
//     }
//     get wathced() {
//         return this.userData.watched;
//     }
//     async updateUserMovies({ movieId, movieList }) {
//         try {
//             await setDoc(doc(db, "users", this.userId), {
//                 [movieList]: arrayUnion(movieId)
//             }, { merge: true });
//         } catch (e) {
//             throw Error(`Error adding to queue: ${movieList}`, e);
//         }
//     }

//     async addToQueue({ movieId }) {
//         await this.updateUserMovies({ movieId, movieList: "queue" });
//     }
//     async addToWatched({ movieId }) {
//         await this.updateUserMovies({ movieId, movieList: "watched" });
//     }

//     // //On login


//     //On logout
//     // const unsubscribeUserData = onSnapshot(collection(db, "users"), () => { });
//     // unsubscribeUserData();


//     // async save() {
//     //     const userRef = db.collection('users').doc(this.userId);
//     //     const userDoc = await userRef.get();
//     //     if (userDoc.exists) {
//     //         const userData = userDoc.data();
//     //         const movies = userData.movies;
//     //         const newMovies = arrayUnion(this.movies);
//     //         await userRef.update({
//     //             movies: newMovies,
//     //         });
//     //     } else {
//     //         await userRef.set({
//     //             movies: this.movies,
//     //         });
//     //     }
//     // }
// }
// export const userMovies = new UserMovies();
// // let userMovies = new UserMovies();
// // setInterval(() => {

// //     console.log(userMovies.userData);
// // }, 2000);
// // const updateUserMovies = async ({ userId, movieId, movieList }) => {
// //     try {
// //         await setDoc(doc(db, "users", userId), {
// //             [movieList]: arrayUnion(movieId)
// //         }, { merge: true });
// //     } catch (e) {
// //         throw Error(`Error adding to queue: ${movieList}`, e);
// //     }
// // }

// // export const addToQueue = async ({ userId, movieId }) => {
// //     await updateUserMovies({ userId, movieId, movieList: "queue" });
// // }
// // export const addToWatched = async ({ userId, movieId }) => {
// //     await updateUserMovies({ userId, movieId, movieList: "watched" });
// // }

// // addToQueue({ userId: "user-id-1", movieId: 11 });
// // addToWatched({ userId: "user-id-1", movieId: 11 });

// // import app from "./firebase_app";
// // import { getFirestore, setDoc, doc, arrayUnion, onSnapshot, collection } from 'firebase/firestore';
// // import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from 'firebase/auth';

// // const provider = new GoogleAuthProvider();
// // const auth = getAuth();
// // const db = getFirestore();

// // class User {
// //     constructor(email, password) {
// //         this.authorized = false;
// //         this.email = email;
// //         this.password = password;
// //     }

// //     const userId = "user-id-1";
// //     const userRef = doc(db, "users", userId);
// //     const userDoc = onSnapshot(userRef, (doc) => {
// //         return doc.data();
// //     });
// //     async updateUserMovies({ userId, movieId, movieList }) {
// //         try {
// //             await setDoc(doc(db, "users", userId), {
// //                 [movieList]: arrayUnion(movieId)
// //             }, { merge: true });
// //         } catch (e) {
// //             throw Error(`Error adding to ${movieList} list:`, e);
// //         }
// //     }
// //     async removeFromQueue({ userId, movieId }) {
// //         updateDoc(doc(db, "users", userId), {
// //             queue: arrayRemove(movieId)
// //         });
// //     }
// //     async addToQueue({ userId, movieId }) {
// //         updateUserMovies({ userId, movieId, movieList: "queue" });
// //     }
// //     async addToWatched({ userId, movieId }) {
// //         updateUserMovies({ userId, movieId, movieList: "watched" });
// //         removeFromQueue({ userId, movieId });
// //     }
// //     async login() {
// //         try {
// //             authResult = await signInWithRedirect(provider);
// //             console.log('User.login()');
// //             this.authorized = true;

// //         } catch (e) {
// //             const credential = GoogleAuthProvider.credentialFromError(error);
// //             console.log('catch ', e, 'credential ', credential);
// //             throw Error(`Error logging in:`, e);
// //         }
// //     }


// // }
// ///////////////////////////////////////////////////////////////////////////////


// // User().addToQueue({ userId: "user-id-1", movieId: 2234 });

// // User
// // const db = getFirestore(app);
// // const UID = "user-id-1";
// // var docData
// // // //On login
// // const subscribeUserData = onSnapshot(doc(db, "users", UID), (doc) => {
// //     console.log("Current data: ", doc.data());
// //     docData = doc.data();
// // });
// // setInterval(() => {

// //     console.log('docData:', docData);
// // }, 1000);
// // await subscribeUserData();
// // //On logout
// // // const unsubscribeUserData = onSnapshot(collection(db, "users"), () => { });
// // // unsubscribeUserData();


// // const updateUserMovies = async ({ userId, movieId, movieList }) => {
// //     try {
// //         await setDoc(doc(db, "users", userId), {
// //             [movieList]: arrayUnion(movieId)
// //         }, { merge: true });
// //     } catch (e) {
// //         throw Error(`Error adding to ${movieList} list:`, e);
// //     }
// // }

// // export const removeFromQueue = async ({ userId, movieId }) => {
// //     updateDoc(doc(db, "users", userId), {
// //         queue: arrayRemove(movieId)
// //     });
// //     // await updateUserMovies({ userId, movieId, movieList: "queue" });
// // }
// // export const addToQueue = async ({ userId, movieId }) => {
// //     updateUserMovies({ userId, movieId, movieList: "queue" });
// // }
// // export const addToWatched = async ({ userId, movieId }) => {
// //     updateUserMovies({ userId, movieId, movieList: "watched" });
// //     removeFromQueue({ userId, movieId });
// // }

// ///////////////////////////////////////////////////////////////////////////////

// // addToQueue({ userId: "user-id-1", movieId: 11 });
// // addToWatched({ userId: "user-id-1", movieId: 11 });

// // const getUsersMovieList = async (id, typeOfList) => {

// //     const usersCollection = doc(db, 'users', id);       // form querry

// //     try {
// //         const docSnap = await getDoc(usersCollection);  // send querry
// //         const userList = (typeOfList === 'queque') ? docSnap.data().queque : docSnap.data().watched;    // get array

// //         // console.log(userList);
// //         return userList;
// //     }
// //     catch { console.log('error'); }
// // }

// // var usersMovieList = getUsersMovieList("96l8p0UDrUzzIBPeo1u7", 'watched'); // gets id and type of array (watched or queque)
// // // console.log(usersMovieList);

// // console.log(usersMovieList);
// // // ----------------------------- вытягиваем массив объектов по фильмам

// // const getUsersMovie = async (usersMovieList) => {
// //     usersMovieList.map(data => console.log(data))
// // }

// // getUsersMovie(usersMovieList);


// // Draft for functional analog
// // constructor(){
// //     this.authorized = false;
// // }
// // const auth = getAuth();
// // const db = getFirestore();
// // // const user = app.auth().currentUser;
// // const userId = "user-id-1";
// // const userRef = doc(db, "users", userId);
// // const userDoc = onSnapshot(userRef, (doc) => {
// //     return doc.data();
// // });
// // async updateUserMovies({ userId, movieId, movieList }){
// //     try {
// //         await setDoc(doc(db, "users", userId), {
// //             [movieList]: arrayUnion(movieId)
// //         }, { merge: true });
// //     } catch (e) {
// //         throw Error(`Error adding to ${movieList} list:`, e);
// //     }
// // }
// // const removeFromQueue = async ({ userId, movieId }) => {
// //     updateDoc(doc(db, "users", userId), {
// //         queue: arrayRemove(movieId)
// //     });
// //     // await updateUserMovies({ userId, movieId, movieList: "queue" });
// // }
// // const addToQueue = async ({ userId, movieId }) => {
// //     updateUserMovies({ userId, movieId, movieList: "queue" });
// // }
// // const addToWatched = async ({ userId, movieId }) => {
// //     updateUserMovies({ userId, movieId, movieList: "watched" });
// //     removeFromQueue({ userId, movieId });
// // }