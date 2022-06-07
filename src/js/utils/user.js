import { auth, provider, db } from "./firebase_app";
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, arrayUnion, updateDoc, arrayRemove } from "firebase/firestore";
class User {
    is_auth = false;
    user_name = '';
    user_email = '';
    user_uiid = '';
    logInByGoogle() {
        console.log('login API');
        signInWithRedirect(auth, provider);
        // return getRedirectResult(auth);
    }
    async logOut() {
        console.log('logout API');
        try {
            await signOut(auth);
            console.log('Sign-out successful');
            this.flush();
        } catch (e) {
            console.log('Sign-out error', error);
            throw Error(`Error signing out: ${error}`);
        }
    }
    flush() {
        this.is_auth = false;
        this.user_name = '';
        this.user_email = '';
        this.user_uiid = '';
        this.movieLists = {};
    }
    async updateUserMovies({ movieId, movieList }) {
        console.log('updateUserMovies fired');
        console.log('adding to list: ' + movieList);
        try {
            await setDoc(doc(db, "users", this.user_uiid), {
                [movieList]: arrayUnion(movieId)
            }, { merge: true });
        } catch (e) {
            throw Error(`Error adding to queue: ${movieList}`, e);
        }
    }
    async removeFromQueue(movieId) {
        try {
            updateDoc(doc(db, "users", this.user_uiid), {
                queue: arrayRemove(movieId)
            });

        } catch (error) {
            console.log('Error removing from queue:', error);
        }
    }
    async addToQueue(movieId) {
        console.log('addToQueue called');
        await this.updateUserMovies({ movieId, movieList: "queue" });
    }
    async addToWatched(movieId) {
        console.log('addToWatched called');
        await this.updateUserMovies({ movieId, movieList: "watched" });
        this.removeFromQueue(movieId);
    }
}
export let myUser = new User();