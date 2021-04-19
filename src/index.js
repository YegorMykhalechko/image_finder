'use strict'
import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import * as basicLightbox from 'basiclightbox'
import { getPictureAcync } from './js/apiServices.js';
import galleryCard from './templates/galleryCard.hbs';
import scrollToNewImage from './js/scrollToNewImage.js';
import { alertNotice, infoNotice } from './js/notice.js';
import 'basiclightbox/dist/basicLightbox.min.css';

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
    if (valueUrl.length === 0) {
        infoNotice()
        return
    }
    getPictureAcync(valueUrl, pageUrl).then(data => {
        if (!data) return
        if (data.hits.length === 0) {
            alertNotice()
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

const modalImageCreate = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') return;
    const largeImage = e.target.dataset.image;
    basicLightbox.create(`<img width="1400" height="900" src="${largeImage}">`).show()
}
gallery.addEventListener('click', modalImageCreate)


