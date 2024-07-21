import axios from 'axios';

export const getQuote = async () => {
    try {
        const response = await axios.get(`https://energyflow.b.goit.study/api/quote`);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error get quote ${error}`);
    }
}

const textEl = document.querySelectorAll('.quote__text');
const authorEl = document.querySelectorAll('.quote__author');

localStorage.getItem('quote') === null ? getQuote().then(data => (textEl.forEach(el => el.innerHTML = data.quote), authorEl.forEach(el => el.innerHTML = data.author), localStorage.setItem('quote', JSON.stringify({date: `${new Date().getDate()}.${new Date().getMonth()}`, quote: data.quote, author: data.author})))) : JSON.parse(localStorage.getItem('quote')).date === `${new Date().getDate()}.${new Date().getMonth()}` ? (textEl.forEach(el => el.innerHTML = JSON.parse(localStorage.getItem('quote')).quote), authorEl.forEach(el => el.innerHTML = JSON.parse(localStorage.getItem('quote')).author)) : getQuote().then(data => (textEl.forEach(el => el.innerHTML = data.quote), authorEl.forEach(el => el.innerHTML = data.author), localStorage.setItem('quote', JSON.stringify({date: `${new Date().getDate()}.${new Date().getMonth()}`, quote: data.quote, author: data.author}))));