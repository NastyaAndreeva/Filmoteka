import modalFilm from '../templates/modal-film.hbs';
import SimpleLightbox from "simplelightbox";
import getDataMovies from '../js/movie-fetch';



const lightbox = new SimpleLightbox('#home-gallery a', {
    
    enableKeyboard: true,
});
lightbox.refresh()
