import axios from 'axios';
import * as basicLightbox from 'basiclightbox'; 

export const newSubscription = async (email) => {
    try {
        const response = await axios.post(`https://energyflow.b.goit.study/api/subscription`, { email: email});
        return response.data;
    }
    catch (error) {
        throw new Error(`Error post subscription ${error}`);
    }
}

document.querySelector('.footer__button').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.footer__form').checkValidity() ? newSubscription(document.querySelector('.footer__input').value).then(data => (basicLightbox.create(`
        <section class="msgModal">
            <p class="msgModal__msg">${data.message}</p>
        </section>
    `).show(), document.querySelector('.footer__input').value = '')) : document.querySelector('.footer__form').reportValidity();
});