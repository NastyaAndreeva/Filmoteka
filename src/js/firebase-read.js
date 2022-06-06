import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getDocs, getFirestore, doc, where, query, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAN-5I6EVm1JCDsJFVlHPFOnqDlUOfsbaw",
  authDomain: "filmoteka-98189.firebaseapp.com",
  databaseURL: "https://filmoteka-98189-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "filmoteka-98189",
  storageBucket: "filmoteka-98189.appspot.com",
  messagingSenderId: "437648861220",
  appId: "1:437648861220:web:0545ac1cdbb5bb833190b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// --------------------------- функция для записи данных в БД
// const fetchUsers = async () => {
//     try {
//         const docRef = await addDoc(collection(db, "users"), {
//             Name: "Владислав",
//             email: "zoobeen1@gmail.com",
//             watched: [54, 25, 324, 26, 435],
//             queque: [255, 856, 453, 998, 454]
//         });
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }

// fetchUsers();

// -------------------------- получаем список очереди или просмотренных из БД
const getUsersMovieList = async (id, typeOfList) => {

    const usersCollection = doc(db, 'users', id);       // form querry

    try {
        const docSnap = await getDoc(usersCollection);  // send querry
        const userList = (typeOfList === 'queque') ? docSnap.data().queque : docSnap.data().watched;    // get array 

        // console.log(userList);
        return userList;
    }
    catch {console.log('error');}
}

let usersMovieList = getUsersMovieList("96l8p0UDrUzzIBPeo1u7", 'watched'); // gets id and type of array (watched or queque)
// console.log(usersMovieList);

console.log(usersMovieList);
// ----------------------------- вытягиваем массив объектов по фильмам

const getUsersMovie = async (usersMovieList) => { 
    usersMovieList.map(data => console.log(data))
}

getUsersMovie(usersMovieList);