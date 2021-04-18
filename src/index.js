'use strict'
import './styles.css';
import icons from "material-design-icons/";
import * as basicLightbox from 'basiclightbox';
import { getPictureAcync } from './js/apiServices.js';
import galleryCard from './templates/galleryCard.hbs'

let valueUrl;
let pageUrl;

const gallery = document.querySelector('.gallery');
const input = document.querySelector('#search-form');
const btn = document.querySelector('.btn');

const getImage = (e) => {
    e.preventDefault();

    gallery.innerHTML = "";
    pageUrl = 1;
    const inputValue = e.target.query.value;
    valueUrl = inputValue;
    getPictureAcync(valueUrl, pageUrl).then(data => {
        const markup = galleryCard(data.hits);
        gallery.insertAdjacentHTML('beforeend', markup);
    });
}
input.addEventListener('submit', getImage);
const addImage = () => {
    pageUrl++;
    getPictureAcync(valueUrl, pageUrl).then(data => {
        const markup = galleryCard(data.hits);
        gallery.insertAdjacentHTML('beforeend', markup);
    }).then(() => {
        const position = btn.offsetTop;
        window.scrollTo({
            top: position,
            behavior: "smooth"
        });
    });
}
btn.addEventListener('click', addImage);





