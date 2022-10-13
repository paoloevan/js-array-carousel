/*
BONUS 1:
Aggiungere il ciclo infinito del carosello.
Ovvero se è attiva la prima immagine e l'utente clicca la freccia
per andare all’immagine precedente, dovrà comparire l’ultima immagine
dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
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
    if (activeImg == 4) {
        activeImg = 0
    } else {
        activeImg++
    }
    console.log(activeImg);

    //seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img_fluid');
    //seleziono la prossima immagine
    const nextSlide = allSlides[activeImg];
    console.log(nextSlide, 'iiiiii');
    // aggiungo alla slide successiva la classe active
    nextSlide.classList.add('active');

})

prevEl.addEventListener('click', function () {
    //seleziono l'immagine attiva
    const currentImg = document.querySelector('.active');
    //tolgo la classe active
    currentImg.classList.remove('active')
    //incremento activeImg
    if (activeImg == 0) {
        activeImg = 4
    } else {
        activeImg--
    }
    //seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img_fluid');
    //seleziono la prossima immagine
    const nextSlide = allSlides[activeImg];
    // aggiungo alla slide successiva la classe active
    nextSlide.classList.add('active');

})


