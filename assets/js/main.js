/*
mileston 2

Adesso rimuoviamo tutto il markup statico e
inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice ciclo for
che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima,
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso
slider stilato nella milestone 1,
ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, 
il programma cambierà l’immagine attiva, 
che quindi verrà visualizzata al posto della precedente.

*/
const carouselImg = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp'
];

// seleziono dove voglio le immagini nella DOM
const slidesEl = document.querySelector('.slides');

//seleziono i bottoni
const buttonBack = document.querySelector('.back_button');
const buttonNext = document.querySelector('.next_button');
let activeImg = 0;
let slidesElMark =`<img class="active" height=300 src="${carouselImg[0]}" alt="">`;
slidesEl.insertAdjacentHTML(`beforeend`, slidesElMark);

//attivo ascolto dei bottoni
buttonNext.addEventListener('click',
    function () {
        activeImg = activeImg + 1;
        
        for (let i = activeImg; i < carouselImg.length; i++) {
            //creo il markup da inserire
            slidesElMark = `<img class="${i == activeImg ? 'active' : ''}" height=300 src="${carouselImg[i]}" alt="">`;
            //inserisco img nella dom
            slidesEl.insertAdjacentHTML(`beforeend`, slidesElMark);
        }
    }

);

