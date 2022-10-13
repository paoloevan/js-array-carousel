/*
MILESTONE 1
creiamo il markup statico: costruiamo il container e inseriamo un'immagine
grande al centro

MILESTONE 2
Adesso rimuoviamo tutto il markup statico
e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito
e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima,
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato
nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
che quindi verrà visualizzata al posto della precedente.
*/


//creo array con le immagini
const imagesArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];
console.log(imagesArray.length);

//selezione l'elmento della DOM
const sliderEl = document.querySelector('.slider')

//inserisco immagini nell'elemento
for (let i = 0; i < imagesArray.length; i++) {
    sliderEl.insertAdjacentHTML('beforeend', `<img class="${i === 0 ? 'active' : ''}" src="${imagesArray[i]}" alt="">`)
    
}
