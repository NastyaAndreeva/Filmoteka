import { doc, getDoc } from "firebase/firestore"; 
import {db, app} from '../firebase/firebase_app';
import userInfo from '../../storage/currentUser';
import Notiflix from 'notiflix';

let usersList = [];

// -------------------------- getting user's movie list 
async function getUsersMovieList(typeOfList, event) {
    const lang = localStorage.getItem('lang') || '';
    let message;
    if (event) { event.preventDefault() };                             // block reload page
        const usersCollection = doc(db, 'users', '2i1T2rjd9xPzQ3BNETY8W5RQGLl1' || localStorage.getItem('user-name') ||  userInfo.userUiid);       // forming a querry

    try {
        const docSnap = await getDoc(usersCollection);  // send querry
        if (!docSnap.data()) {
            switch (lang) {
                case 'en':
                    message = `You have no movies in WATCHED и QUEUE`;
                    break;
                case 'ru':
                    message = 'Вы еще не добавили ни одного фильма в разделы ОЧЕРЕДЬ и ПРОСМОТРЕНО';
                    break;
                case 'uk':
                    message = 'Ви ще не додали жодного фільму в розділи ЧЕРГА та ПЕРЕГЛЯНУТО';
                    break;
            }
            Notiflix.Confirm.show(`${message}`, '', 'Ok', '', '', '', { titleMaxLength: 64, titleColor: '#111111', okButtonBackground: '#ff6b08' });
        }
     
        usersList = (typeOfList === 'btn-watched') ? docSnap.data().watched : docSnap.data().queue;    // get movie list array 

        if (usersList.length === 0) {
            switch (lang) {
                case 'en':
                    message = `You have no movies in ${typeOfList === 'btn-watched' ? 'WATCHED' : 'QUEUE'}`;
                    break;
                case 'ru':
                    message = `Вы не добавили ни одного фильма в раздел ${typeOfList === 'btn-watched' ? 'ПРОСМОТРЕНО' : 'ОЧЕРЕДЬ'}`;
                    break;
                case 'uk':
                    message = `Ви не додали жодного фільму до розділу ${typeOfList === 'btn-watched' ? 'ПЕРЕГЛЯНУТО' : 'ЧЕРГА'}`;
                    break;
            }
            Notiflix.Confirm.show(`${message}`, '', 'Ok', '', '', '', { titleMaxLength: 94, titleColor: '#111111', okButtonBackground: '#ff6b08' });
        }
    }
    catch {
        switch (lang) {
            case 'en':
                message = `Oh, something is wrong. Try again, please...`;
                break;
            case 'ru':
                message = `Oй, что-то пошло не так. Попробуйте еще раз...`;
                break;
            case 'uk':
                message = `Йойки, щось не так відбуваєтсья. То москалі винуваті. Спробуйте ще раз...`;
                break;
        }
        Notiflix.Confirm.show(`${message}`, '', 'Ok', '', '', '', { titleMaxLength: 94, titleColor: '#111111', okButtonBackground: '#ff6b08' });
        console.log(error);
    }
    
    return usersList;
    }

export default getUsersMovieList;
