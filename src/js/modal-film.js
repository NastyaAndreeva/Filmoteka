import modalFilm from '../templates/modal-film.hbs';
import SimpleLightbox from "simplelightbox";
import getDataMovies from '../js/movie-fetch';



const lightbox = new SimpleLightbox('#home-gallery a', {
    
    enableKeyboard: true,
});
lightbox.refresh()
<<<<<<< HEAD
=======



/*
import * as basicLightbox from 'basiclightbox';


function onModalFilm(evt) {
    evt.preventDefault();
}
    const instance = basicLightbox.create(
        document.querySelector('.movie-card'),

        { onShow: () => { window.addEventListener('keydown', onKeydown) } },
        { onClose: () => { window.removeEventListener('keydown', onKeydown) } } ,
    );
 
    instance.show();
 */

>>>>>>> d27f8bedb6ceec1ce352f4ef1714859d279a380a
