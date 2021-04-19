'use strict'
import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import { getPictureAcync } from './js/apiServices.js';
import galleryCard from './templates/galleryCard.hbs'
import scrollToNewImage from './js/scrollToNewImage.js'

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
    if(valueUrl.length === 0){
        alert('введите')
        return
    }
    getPictureAcync(valueUrl, pageUrl).then(data => {
        if (!data)return
        if (data.hits.length === 0){
            alert('не найдено');
        };
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
        scrollToNewImage()
    });
}
btn.addEventListener('click', addImage);




