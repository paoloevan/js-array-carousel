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

//selezione elmenti della DOM
const sliderEl = document.querySelector('.slider');
const prevEl = document.querySelector('.prev');
const nextEl = document.querySelector('.next');


let urlImg
let activeImg = 0;

//inserisco immagini nell'elemento
for (let i = 0; i < imagesArray.length; i++) {
    urlImg = imagesArray[i];
    sliderEl.insertAdjacentHTML('beforeend', `<img class="img_fluid ${i == activeImg ? 'active' : ''}" src="${urlImg}" alt="">`)
}


//al click devo togliere la classe active dall'immagine corrente
//e assegnarlo alla successiva

const nextImg = document.querySelectorAll('.img_fluid')

nextEl.addEventListener('click', function () {
    //seleziono l'immagine attiva
    const currentImg = document.querySelector('.active');
    //tolgo la classe active
    currentImg.classList.remove('active')
    //incremento activeImg
    activeImg++
    //seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img_fluid');
    //seleziono la prossima immagine
    const nextSlide = allSlides[activeImg];
    // aggiungo alla slide successiva la classe active
    nextSlide.classList.add('active');

})

prevEl.addEventListener('click', function () {
    //seleziono l'immagine attiva
    const currentImg = document.querySelector('.active');
    //tolgo la classe active
    currentImg.classList.remove('active')
    //incremento activeImg
    activeImg--
    //seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img_fluid');
    //seleziono la prossima immagine
    const nextSlide = allSlides[activeImg];
    // aggiungo alla slide successiva la classe active
    nextSlide.classList.add('active');

})


