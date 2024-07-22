import axios from 'axios';
import * as basicLightbox from 'basiclightbox'; 

export const getExersizes = async (filter, page) => {
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/filters?filter=${filter}&page=${page}&limit=12`);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get quote ${error}`);
    }
}

export const getExs = async (filter, exs, page, keyword) => {
    console.log(`https://energyflow.b.goit.study/api/exercises?${filter}=${exs}${keyword !== '' ? "&keyword=" + keyword : ""}&page=1&limit=9`);
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/exercises?${filter}=${exs}${keyword !== '' ? "&keyword=" + keyword : ""}&page=${page}&limit=9`);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get quote ${error}`);
    }
}

export const getEx = async (id) => {
    console.log(`https://energyflow.b.goit.study/api/exercises/${id}`);
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get quote ${error}`);
    }
}

export const sendRating = async (id, rating) => {
    console.log(`https://energyflow.b.goit.study/api/exercises/${id}/rating`);
    try {
        const response = await axios.patch(`https://energyflow.b.goit.study/api/exercises/${id}/rating`, rating);
        console.log(response.data)
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get quote ${error}`);
    }
}

const pattern = `^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$`;
let page = 1;
let ex = '';
let modal;
let modal2;
let word = '';
let fav = [];

const showExersizes = (filter, page) => getExersizes(filter, page).then(data => {
    console.log(data);
    word = document.querySelector('.exersize__input').value;
    document.querySelector('.exersize__list').innerHTML = '';
    document.querySelector('.exersize__pages').innerHTML = '';
    document.querySelector('.exersize__input').value = '';
    for (let i = 1; i <= data.totalPages; i++) {
        document.querySelector('.exersize__pages').innerHTML += `
            <li class="exersize__page"><button class="exersize__pageBut ${i === page ? "activePage" : ""}" data-id="${i}">${i}</button></li>
        `;
    }
    data.results.forEach(result => document.querySelector('.exersize__list').innerHTML += `
        <li class="exersize__item" style="background: url(${result.imgUrl}); background-size: 312px 250px;">
            <div class="exersize__overlay"></div>
            <button class="exersize__but" data-name="${result.name}">
                <h3 class="exersize__name">${result.name}</h3>
                <p class="exersize__category">${result.filter}</p>
            </button>
        </li>
    `);
});

const showExs = (filter, exs, page, keyword = '') => getExs(filter, exs, page, keyword).then(data => {
    console.log(data);
    word = document.querySelector('.exersize__input').value;
    document.querySelector('.exersize__exersizes').innerHTML = '';
    document.querySelector('.exersize__pages').innerHTML = '';
    document.querySelector('.exersize__exersizes').classList.remove('activeErr');
    document.querySelector('.exersize__input').value = '';
    for (let i = 1; i <= data.totalPages; i++) {
        document.querySelector('.exersize__pages').innerHTML += `
            <li class="exersize__page"><button class="exersize__pageBut ${i === page ? "activePage" : ""}" data-id="${i}">${i}</button></li>
        `;
    }
    data.results.length !== 0 ? data.results.forEach(result => document.querySelector('.exersize__exersizes').innerHTML += `
        <li class="exersize__exersize">
            <button type="button" class="exersize__startBut" data-id="${result._id}">
                <div class="exersize__cont">
                    <p class="exersize__workoutLogo">WORKOUT</p>
                    <p class="exersize__rating">
                        ${result.rating}
                        <svg width="12.966797" height="12.431580" viewBox="0 0 12.9668 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.38 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>
                    </p>
                    <p class="exersize__start">
                        Start
                        <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Icon" d="M7.5 14L14 7.5L7.5 1M1 7.5L14 7.5" stroke="#1B1B1B" stroke-opacity="1.000000" stroke-width="1.300000" stroke-linejoin="round"/></svg>
                    </p>
                </div>
                <div class="exersize__extitle">
                    <svg class="exersize__icon" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><circle id="Ellipse 1" cx="12.000000" cy="12.000000" r="12.000000" fill="#7E847F" fill-opacity="1.000000"/><path id="Vector" d="M18.82 8.72C18.61 8.47 18.24 8.44 17.99 8.65L16.34 10.02L15.59 8.15C15.56 8.08 15.52 8.03 15.47 7.97C15.32 7.63 15.05 7.34 14.68 7.17C14.52 7.09 14.36 7.05 14.19 7.03C14.16 7.02 14.12 6.99 14.08 6.98L11.19 6.17C11.03 6.13 10.87 6.16 10.74 6.23C10.58 6.29 10.44 6.4 10.38 6.57L9.29 9.37C9.17 9.67 9.32 10.01 9.63 10.13C9.93 10.25 10.27 10.1 10.39 9.79L11.31 7.43L12.63 7.8C12.59 7.85 12.56 7.9 12.53 7.96L10.85 11.61C10.82 11.66 10.81 11.72 10.79 11.77L8.74 15.21L5.31 16.36C4.93 16.65 4.84 17.19 5.13 17.58C5.42 17.97 5.97 18.05 6.36 17.77L9.86 16.56C9.97 16.48 10.05 16.38 10.11 16.27C10.15 16.22 10.2 16.18 10.24 16.12L11.46 14.08L13.63 15.92L11.31 18.54C10.99 18.9 11.02 19.46 11.38 19.77C11.74 20.1 12.3 20.06 12.62 19.7L15.51 16.44C15.6 16.34 15.66 16.22 15.69 16.1C15.71 16.03 15.71 15.97 15.72 15.9C15.72 15.86 15.73 15.83 15.73 15.8C15.72 15.56 15.63 15.33 15.43 15.16L13.43 13.46C13.58 13.32 13.7 13.16 13.79 12.97L15.08 10.17L15.5 11.27C15.51 11.37 15.55 11.47 15.62 11.55C15.68 11.62 15.76 11.67 15.84 11.71C15.85 11.71 15.86 11.71 15.87 11.71C15.93 11.73 15.98 11.75 16.04 11.75C16.1 11.76 16.17 11.75 16.24 11.73C16.24 11.73 16.24 11.73 16.24 11.73C16.26 11.73 16.28 11.73 16.3 11.72C16.39 11.69 16.47 11.62 16.53 11.55L18.88 9.55C19.13 9.34 19.03 8.97 18.82 8.72Z" fill="#F6F6F6" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M17.49 5.65C17.49 6.56 16.75 7.3 15.84 7.3C14.93 7.3 14.19 6.56 14.19 5.65C14.19 4.73 14.93 4 15.84 4C16.75 4 17.49 4.73 17.49 5.65Z" fill="#F6F6F6" fill-opacity="1.000000" fill-rule="evenodd"/></svg>
                    <h3 class="exersize__ex">${result.name}</h3>
                </div>
                <ul class="info">
                    <li class="info__item">Burned calories: <span class="info__span">${result.burnedCalories} / 3 min</span></li>
                    <li class="info__item">Body part: <span class="info__span">${result.bodyPart}</span></li>
                    <li class="info__item">Target: <span class="info__span">${result.target}</span></li>
                </ul>
            </button>
        </li>
    `) : (document.querySelector('.exersize__exersizes').classList.add('activeErr'), document.querySelector('.exersize__exersizes').innerHTML = `<p class="exersize__error">Unfortunately, <span class="exersize__err"> no results </span> were found. You may want to consider other search options to find the exercise you are looking for. Our range is wide and you have the opportunity to find more options that suit your needs.</p>`);
});

showExersizes('Muscles', page);

const activeStars = (stars) => {
    document.querySelector('.ratingModal__rating').innerHTML = `${stars}.0`
    for (let i = 1; i <= 5; i++) {
        stars >= i ? (document.querySelector(`.ratingModal__button[data-star="${i}"]>svg>path`).setAttribute('fill', '#EEA10C'), document.querySelector(`.ratingModal__button[data-star="${i}"]>svg>path`).setAttribute('fill-opacity', '1')) : (document.querySelector(`.ratingModal__button[data-star="${i}"]>svg>path`).setAttribute('fill', '#1B1B1B'), document.querySelector(`.ratingModal__button[data-star="${i}"]>svg>path`).setAttribute('fill-opacity', '0.2'));
    }
};

document.querySelector('.exersize').addEventListener('click', (e) => {
    e.target.closest('.exersize__filterBut') !== null ? (document.querySelectorAll('.exersize__filterBut').forEach(el => el.classList.remove('activeBut')), e.target.classList.add('activeBut'), document.querySelector('.exersize__exersizes').classList.remove('showExs'), document.querySelector('.exersize__title').innerHTML = `Exercises`, document.querySelector('.exersize__list').classList.add('showExs'), page = 1, ex = '', document.querySelector('.exersize__form').classList.remove('activeForm'), showExersizes(e.target.dataset.category, page)) : null;
    e.target.closest('.exersize__pageBut') !== null ? (document.querySelectorAll('.exersize__pageBut').forEach(el => el.classList.remove('activePage')), e.target.classList.add('activePage'), page = Number(e.target.dataset.id), ex !== '' ? showExs(document.querySelector('.exersize__filterBut.activeBut').dataset.catexs, ex, page) : showExersizes(document.querySelector('.exersize__filterBut.activeBut').dataset.category, page)) : null;
    e.target.closest('.exersize__but') !== null ? (document.querySelector('.exersize__title').innerHTML = `Exercises / <span class="exersize__span">${e.target.closest('.exersize__but').dataset.name}</span>`, document.querySelector('.exersize__exersizes').classList.add('showExs'), document.querySelector('.exersize__list').classList.remove('showExs'), page = 1, ex = e.target.closest('.exersize__but').dataset.name, document.querySelector('.exersize__form').classList.add('activeForm'), showExs(document.querySelector('.exersize__filterBut.activeBut').dataset.catexs, e.target.closest('.exersize__but').dataset.name, page)) : null;
    e.target.closest('.exersize__search') !== null ? showExs(document.querySelector('.exersize__filterBut.activeBut').dataset.catexs, ex, page, document.querySelector('.exersize__input').value) : null;
    e.target.closest('.exersize__startBut') !== null ? getEx(e.target.closest('.exersize__startBut').dataset.id).then(data => (modal = basicLightbox.create(`
        <section class="exersizeModal">
            <button type="button" class="exersizeModal__close"><svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Icon" d="M19.83 8.16L8.16 19.83M8.16 8.16L19.83 19.83" stroke="#1B1B1B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/></svg></button>
            <img class="exersizeModal__img" src="${data.gifUrl}" alt="#" />
            <div class="exersizeModal__overlay"></div>
            <h3 class="exersizeModal__title">${data.name}</h3>
            <div class="exersizeModal__rating">
                <p class="exersizeModal__ratingNum">
                    ${data.rating}
                </p>
                <ul class="exersizeModal__stars">
                    <li class="exersizeModal__star">
                        ${Math.round(data.rating, 0) >= 1 ? '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>' : '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 5" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>'}
                    </li>
                    <li class="exersizeModal__star">
                        ${Math.round(data.rating, 0) >= 2 ? '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>' : '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 5" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>'}
                    </li>
                    <li class="exersizeModal__star">
                        ${Math.round(data.rating, 0) >= 3 ? '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>' : '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 5" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>'}
                    </li>
                    <li class="exersizeModal__star">
                        ${Math.round(data.rating, 0) >= 4 ? '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>' : '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 5" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>'}
                    </li>
                    <li class="exersizeModal__star">
                        ${Math.round(data.rating, 0) >= 5 ? '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#EEA10C" fill-opacity="1.000000" fill-rule="evenodd"/></svg>' : '<svg width="12.967773" height="12.431580" viewBox="0 0 12.9678 12.4316" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 5" d="M5.53 0.69L4.68 3.29C4.55 3.7 4.16 3.98 3.73 3.98L1 3.98C0.03 3.98 -0.37 5.22 0.41 5.79L2.62 7.39C2.97 7.65 3.12 8.1 2.98 8.51L2.14 11.11C1.84 12.03 2.89 12.8 3.68 12.23L5.89 10.62C6.24 10.37 6.72 10.37 7.07 10.62L9.28 12.23C10.06 12.8 11.12 12.03 10.82 11.11L9.97 8.51C9.84 8.1 9.99 7.65 10.34 7.39L12.55 5.79C13.33 5.22 12.93 3.98 11.96 3.98L9.23 3.98C8.79 3.98 8.41 3.7 8.27 3.29L7.43 0.69C7.13 -0.24 5.83 -0.24 5.53 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>'}
                    </li>
                </ul>
            </div>
            <ul class="exersizeModal__list">
                <li class="exersizeModal__item">
                    <p class="exersizeModal__label">Target</p>
                    <p class="exersizeModal__dat">${data.target}</p>
                </li>
                <li class="exersizeModal__item">
                    <p class="exersizeModal__label">Body Part</p>
                    <p class="exersizeModal__dat">${data.bodyPart}</p>
                </li>
                <li class="exersizeModal__item">
                    <p class="exersizeModal__label">Equipment</p>
                    <p class="exersizeModal__dat">${data.equipment}</p>
                </li>
                <li class="exersizeModal__item">
                    <p class="exersizeModal__label">Popular</p>
                    <p class="exersizeModal__dat">${data.popularity}</p>
                </li>
                <li class="exersizeModal__item">
                    <p class="exersizeModal__label">Burned calories</p>
                    <p class="exersizeModal__dat">${data.burnedCalories}/3 min</p>
                </li>
            </ul>
            <p class="exersizeModal__description">
                ${data.description}
            </p>
            <div class="exersizeModal__buts">
                <button class="exersizeModal__addToFav" data-id="${data._id}">
                    ${localStorage.getItem('fav') !== null ? JSON.parse(localStorage.getItem('fav')).includes(data._id) ? 'Remove from' : 'Add to favorites' : 'Add to favorites'}
                    <svg class="exersizeModal__svg" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs><clipPath id="clip3600_830"><rect id="heart" rx="000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="heart" rx="000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip3600_830)"><path id="Vector" d="M15.87 2.84C15.32 2.61 14.72 2.49 14.12 2.49C13.52 2.49 12.92 2.61 12.37 2.84C11.81 3.07 11.3 3.41 10.88 3.84L10 4.72L9.11 3.84C8.25 2.98 7.09 2.49 5.87 2.49C4.65 2.49 3.49 2.98 2.63 3.84C1.77 4.7 1.29 5.86 1.29 7.08C1.29 8.29 1.77 9.46 2.63 10.32L3.51 11.2L10 17.69L16.48 11.2L17.36 10.32C17.79 9.89 18.13 9.39 18.36 8.83C18.59 8.28 18.71 7.68 18.71 7.08C18.71 6.48 18.59 5.88 18.36 5.32C18.13 4.77 17.79 4.26 17.36 3.84C16.94 3.41 16.43 3.07 15.87 2.84Z" stroke="#F6F6F6" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/></g></svg>
                </button>
                <button class="exersizeModal__giveRating">
                    Give a rating
                </button>
            </div>
        </section>
    `), modal.show(), document.querySelector('.exersizeModal__giveRating').addEventListener('click', (e) => (modal2 = basicLightbox.create(`
            <section class="ratingModal" data-id="${data._id}">
                <button type="button" class="ratingModal__close"><svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Icon" d="M19.83 8.16L8.16 19.83M8.16 8.16L19.83 19.83" stroke="#1B1B1B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/></svg></button>
                <p class="ratingModal__text">Rating</p>
                <p class="ratingModal__rating">0.0</p>
                <ul class="ratingModal__stars" data-stars="0">
                    <li class="ratingModal__star">
                        <button class="ratingModal__button" data-star="1">
                            <svg width="18.673828" height="17.858643" viewBox="0 0 18.6738 17.8586" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M8.38 0.69L6.86 5.36C6.73 5.77 6.34 6.05 5.91 6.05L1 6.05C0.03 6.05 -0.37 7.29 0.41 7.86L4.38 10.75C4.74 11 4.88 11.45 4.75 11.87L3.23 16.54C2.93 17.46 3.98 18.23 4.77 17.66L8.74 14.77C9.09 14.51 9.57 14.51 9.92 14.77L13.9 17.66C14.68 18.23 15.73 17.46 15.43 16.54L13.92 11.87C13.78 11.45 13.93 11 14.28 10.75L18.25 7.86C19.04 7.29 18.64 6.05 17.67 6.05L12.75 6.05C12.32 6.05 11.94 5.77 11.8 5.36L10.28 0.69C9.98 -0.24 8.68 -0.24 8.38 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>
                        </button>
                    </li>
                    <li class="ratingModal__star">
                        <button class="ratingModal__button" data-star="2">
                            <svg width="18.673828" height="17.858643" viewBox="0 0 18.6738 17.8586" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M8.38 0.69L6.86 5.36C6.73 5.77 6.34 6.05 5.91 6.05L1 6.05C0.03 6.05 -0.37 7.29 0.41 7.86L4.38 10.75C4.74 11 4.88 11.45 4.75 11.87L3.23 16.54C2.93 17.46 3.98 18.23 4.77 17.66L8.74 14.77C9.09 14.51 9.57 14.51 9.92 14.77L13.9 17.66C14.68 18.23 15.73 17.46 15.43 16.54L13.92 11.87C13.78 11.45 13.93 11 14.28 10.75L18.25 7.86C19.04 7.29 18.64 6.05 17.67 6.05L12.75 6.05C12.32 6.05 11.94 5.77 11.8 5.36L10.28 0.69C9.98 -0.24 8.68 -0.24 8.38 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>
                        </button>
                    </li>
                    <li class="ratingModal__star">
                        <button class="ratingModal__button" data-star="3">
                            <svg width="18.673828" height="17.858643" viewBox="0 0 18.6738 17.8586" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M8.38 0.69L6.86 5.36C6.73 5.77 6.34 6.05 5.91 6.05L1 6.05C0.03 6.05 -0.37 7.29 0.41 7.86L4.38 10.75C4.74 11 4.88 11.45 4.75 11.87L3.23 16.54C2.93 17.46 3.98 18.23 4.77 17.66L8.74 14.77C9.09 14.51 9.57 14.51 9.92 14.77L13.9 17.66C14.68 18.23 15.73 17.46 15.43 16.54L13.92 11.87C13.78 11.45 13.93 11 14.28 10.75L18.25 7.86C19.04 7.29 18.64 6.05 17.67 6.05L12.75 6.05C12.32 6.05 11.94 5.77 11.8 5.36L10.28 0.69C9.98 -0.24 8.68 -0.24 8.38 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>
                        </button>
                    </li>
                    <li class="ratingModal__star">
                        <button class="ratingModal__button" data-star="4">
                            <svg width="18.673828" height="17.858643" viewBox="0 0 18.6738 17.8586" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M8.38 0.69L6.86 5.36C6.73 5.77 6.34 6.05 5.91 6.05L1 6.05C0.03 6.05 -0.37 7.29 0.41 7.86L4.38 10.75C4.74 11 4.88 11.45 4.75 11.87L3.23 16.54C2.93 17.46 3.98 18.23 4.77 17.66L8.74 14.77C9.09 14.51 9.57 14.51 9.92 14.77L13.9 17.66C14.68 18.23 15.73 17.46 15.43 16.54L13.92 11.87C13.78 11.45 13.93 11 14.28 10.75L18.25 7.86C19.04 7.29 18.64 6.05 17.67 6.05L12.75 6.05C12.32 6.05 11.94 5.77 11.8 5.36L10.28 0.69C9.98 -0.24 8.68 -0.24 8.38 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>
                        </button>
                    </li>
                    <li class="ratingModal__star">
                        <button class="ratingModal__button" data-star="5">
                            <svg width="18.673828" height="17.858643" viewBox="0 0 18.6738 17.8586" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Star 1" d="M8.38 0.69L6.86 5.36C6.73 5.77 6.34 6.05 5.91 6.05L1 6.05C0.03 6.05 -0.37 7.29 0.41 7.86L4.38 10.75C4.74 11 4.88 11.45 4.75 11.87L3.23 16.54C2.93 17.46 3.98 18.23 4.77 17.66L8.74 14.77C9.09 14.51 9.57 14.51 9.92 14.77L13.9 17.66C14.68 18.23 15.73 17.46 15.43 16.54L13.92 11.87C13.78 11.45 13.93 11 14.28 10.75L18.25 7.86C19.04 7.29 18.64 6.05 17.67 6.05L12.75 6.05C12.32 6.05 11.94 5.77 11.8 5.36L10.28 0.69C9.98 -0.24 8.68 -0.24 8.38 0.69Z" fill="#1B1B1B" fill-opacity="0.200000" fill-rule="evenodd"/></svg>
                        </button>
                    </li>
                </ul>
                <form class="ratingModal__form">
                    <input type="text" placeholder="Email" class="ratingModal__email" pattern="${pattern}" required>
                    <textarea class="ratingModal__comment" placeholder="Your comment" required></textarea>
                    <button type="submit" class="ratingModal__send">Send</button>
                </form>
            </section>
        `), modal2.show(), document.querySelector('.ratingModal__stars').addEventListener('click', (e) => e.target.closest('.ratingModal__button') !== null ? (document.querySelector('.ratingModal__stars').setAttribute('data-stars', e.target.closest('.ratingModal__button').dataset.star), activeStars(e.target.closest('.ratingModal__button').dataset.star)) : null), document.querySelector('.ratingModal__send').addEventListener('click', (ee) => {
            ee.preventDefault();
            document.querySelector('.ratingModal__form').checkValidity() ? sendRating(document.querySelector('.ratingModal').dataset.id, {
                rate: Number(document.querySelector('.ratingModal__stars').dataset.stars),
                email: document.querySelector('.ratingModal__email').value,
                review: document.querySelector('.ratingModal__comment').value
            }).then(data => (modal.close(), modal2.close(), showExs(document.querySelector('.exersize__filterBut.activeBut').dataset.catexs, ex, page, word))) : document.querySelector('.ratingModal__form').reportValidity();
        }))), document.querySelector('.exersizeModal__close').addEventListener('click', (e) => modal.close()), document.querySelector('.exersizeModal__addToFav').addEventListener('click', (e) => (document.querySelector('.exersizeModal__addToFav').innerHTML = `${localStorage.getItem('fav') !== null ? JSON.parse(localStorage.getItem('fav')).includes(e.target.dataset.id) ? 'Add to favorites' : 'Remove from' : 'Remove from'} <svg class="exersizeModal__svg" width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs><clipPath id="clip3600_830"><rect id="heart" rx="000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="heart" rx="000000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip3600_830)"><path id="Vector" d="M15.87 2.84C15.32 2.61 14.72 2.49 14.12 2.49C13.52 2.49 12.92 2.61 12.37 2.84C11.81 3.07 11.3 3.41 10.88 3.84L10 4.72L9.11 3.84C8.25 2.98 7.09 2.49 5.87 2.49C4.65 2.49 3.49 2.98 2.63 3.84C1.77 4.7 1.29 5.86 1.29 7.08C1.29 8.29 1.77 9.46 2.63 10.32L3.51 11.2L10 17.69L16.48 11.2L17.36 10.32C17.79 9.89 18.13 9.39 18.36 8.83C18.59 8.28 18.71 7.68 18.71 7.08C18.71 6.48 18.59 5.88 18.36 5.32C18.13 4.77 17.79 4.26 17.36 3.84C16.94 3.41 16.43 3.07 15.87 2.84Z" stroke="#F6F6F6" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/></g></svg>`, localStorage.setItem('fav', localStorage.getItem('fav') !== null ? `[${JSON.parse(localStorage.getItem('fav')).includes(e.target.dataset.id) ? localStorage.getItem('fav').slice(1, -1).replace(e.target.dataset.id, '') : JSON.parse(localStorage.getItem('fav')).length !== 0 ? localStorage.getItem('fav').slice(1, -1) + ',"' + e.target.dataset.id + '"' : '"' + e.target.dataset.id + '"'}]` : `["${e.target.dataset.id}"]`), localStorage.setItem('fav', JSON.stringify(JSON.parse(localStorage.getItem('fav')).filter(fav => fav !== '' && fav !== undefined && fav !== "undefined"))))))) : null;
});