import axios from 'axios';

export const getEx = async (id) => {
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/exercises/${id}`);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get ex ${error}`);
    }
}

const showFavs = () => (document.querySelector('.favorites__list').innerHTML = '', localStorage.getItem('fav') !== null ? JSON.parse(localStorage.getItem('fav')).forEach(ex => getEx(ex).then(result => document.querySelector('.favorites__list').innerHTML += `
    <li class="favorites__item">
        <div class="favorites__cont">
            <p class="favorites__workoutLogo">WORKOUT</p>
            <button class="favorites__delBut" data-id="${result._id}">
                <svg class="favorites__svg" width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs><clipPath id="clip3510_3745"><rect id="trash-01" rx="000000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="trash-01" rx="000000" width="15.000000" height="15.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip3510_3745)"><path id="Icon" d="M5.33 3.99L5.33 3.46C5.33 2.71 5.33 2.34 5.47 2.06C5.6 1.81 5.81 1.6 6.06 1.47C6.34 1.33 6.71 1.33 7.46 1.33L8.53 1.33C9.28 1.33 9.65 1.33 9.93 1.47C10.18 1.6 10.39 1.81 10.52 2.06C10.66 2.34 10.66 2.71 10.66 3.46L10.66 3.99M6.66 7.66L6.66 11M9.33 7.66L9.33 11M2 3.99L14 3.99M12.66 3.99L12.66 11.46C12.66 12.58 12.66 13.14 12.44 13.57C12.25 13.95 11.95 14.25 11.57 14.44C11.14 14.66 10.58 14.66 9.46 14.66L6.53 14.66C5.41 14.66 4.85 14.66 4.42 14.44C4.04 14.25 3.74 13.95 3.55 13.57C3.33 13.14 3.33 12.58 3.33 11.46L3.33 3.99" stroke="#1B1B1B" stroke-opacity="1.000000" stroke-width="1.300000" stroke-linejoin="round"/></g></svg>
            </button>
            <button class="favorites__start" type="button">
                Start
                <svg width="16.000000" height="16.000000" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><path id="Icon" d="M7.5 14L14 7.5L7.5 1M1 7.5L14 7.5" stroke="#1B1B1B" stroke-opacity="1.000000" stroke-width="1.300000" stroke-linejoin="round"/></svg>
            </button>
        </div>
        <div class="favorites__favtitle">
            <svg class="favorites__icon" width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with Pixso.</desc><defs/><circle id="Ellipse 1" cx="12.000000" cy="12.000000" r="12.000000" fill="#7E847F" fill-opacity="1.000000"/><path id="Vector" d="M18.82 8.72C18.61 8.47 18.24 8.44 17.99 8.65L16.34 10.02L15.59 8.15C15.56 8.08 15.52 8.03 15.47 7.97C15.32 7.63 15.05 7.34 14.68 7.17C14.52 7.09 14.36 7.05 14.19 7.03C14.16 7.02 14.12 6.99 14.08 6.98L11.19 6.17C11.03 6.13 10.87 6.16 10.74 6.23C10.58 6.29 10.44 6.4 10.38 6.57L9.29 9.37C9.17 9.67 9.32 10.01 9.63 10.13C9.93 10.25 10.27 10.1 10.39 9.79L11.31 7.43L12.63 7.8C12.59 7.85 12.56 7.9 12.53 7.96L10.85 11.61C10.82 11.66 10.81 11.72 10.79 11.77L8.74 15.21L5.31 16.36C4.93 16.65 4.84 17.19 5.13 17.58C5.42 17.97 5.97 18.05 6.36 17.77L9.86 16.56C9.97 16.48 10.05 16.38 10.11 16.27C10.15 16.22 10.2 16.18 10.24 16.12L11.46 14.08L13.63 15.92L11.31 18.54C10.99 18.9 11.02 19.46 11.38 19.77C11.74 20.1 12.3 20.06 12.62 19.7L15.51 16.44C15.6 16.34 15.66 16.22 15.69 16.1C15.71 16.03 15.71 15.97 15.72 15.9C15.72 15.86 15.73 15.83 15.73 15.8C15.72 15.56 15.63 15.33 15.43 15.16L13.43 13.46C13.58 13.32 13.7 13.16 13.79 12.97L15.08 10.17L15.5 11.27C15.51 11.37 15.55 11.47 15.62 11.55C15.68 11.62 15.76 11.67 15.84 11.71C15.85 11.71 15.86 11.71 15.87 11.71C15.93 11.73 15.98 11.75 16.04 11.75C16.1 11.76 16.17 11.75 16.24 11.73C16.24 11.73 16.24 11.73 16.24 11.73C16.26 11.73 16.28 11.73 16.3 11.72C16.39 11.69 16.47 11.62 16.53 11.55L18.88 9.55C19.13 9.34 19.03 8.97 18.82 8.72Z" fill="#F6F6F6" fill-opacity="1.000000" fill-rule="nonzero"/><path id="Vector" d="M17.49 5.65C17.49 6.56 16.75 7.3 15.84 7.3C14.93 7.3 14.19 6.56 14.19 5.65C14.19 4.73 14.93 4 15.84 4C16.75 4 17.49 4.73 17.49 5.65Z" fill="#F6F6F6" fill-opacity="1.000000" fill-rule="evenodd"/></svg>
            <h3 class="favorites__fav">${result.name}</h3>
        </div>
        <ul class="info">
            <li class="info__item">Burned calories: <span class="info__span">${result.burnedCalories} / 3 min</span></li>
            <li class="info__item">Body part: <span class="info__span">${result.bodyPart}</span></li>
            <li class="info__item">Target: <span class="info__span">${result.target}</span></li>
        </ul>
    </li>
`)) : null);

showFavs();

document.querySelector('.favorites').addEventListener('click', (e) => {
    e.target.closest('.favorites__delBut') !== null ? (localStorage.setItem('fav', JSON.stringify(JSON.parse(localStorage.getItem('fav').replace(e.target.closest('.favorites__delBut').dataset.id, '')).filter(fav => fav !== '' && fav !== undefined))), showFavs()) : null;
});