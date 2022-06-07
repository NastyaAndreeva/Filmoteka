import app from "./firebase_app";
import { getFirestore, setDoc, doc, arrayUnion } from 'firebase/firestore/lite';

const db = getFirestore(app);

const updateUserMovies = async ({ userId, movieId, movieList }) => {
    try {
        await setDoc(doc(db, "users", userId), {
            [movieList]: arrayUnion(movieId)
        }, { merge: true });
    } catch (e) {
        throw Error(`Error adding to queue: ${movieList}`, e);
    }
}

export const addToQueue = async ({ userId, movieId }) => {
    await updateUserMovies({ userId, movieId, movieList: "queue" });
}
export const addToWatched = async ({ userId, movieId }) => {
    await updateUserMovies({ userId, movieId, movieList: "watched" });
}

// addToQueue({ userId: "user-id-1", movieId: 11 });
// addToWatched({ userId: "user-id-1", movieId: 11 });