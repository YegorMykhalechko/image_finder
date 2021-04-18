'use strict';
const baseUrl = `https://pixabay.com/api/`;
const keyUrl = `&key=21214963-0b498012b448050e925cba030`;

export const getPictureAcync = async (value, page) => {
    try {
        const response = await fetch(`${baseUrl}?image_type=photo&orientation=horizontal&q=${value}&page=${page}&per_page=12&key=${keyUrl}`);
        const data = await response.json();
        return data
    }
    catch (e) {
        console.error(e)
    }
}

