/*
Adesso rimuoviamo tutto il markup statico e
inseriamo tutte le immagini dinamicamente
servendoci dell'array fornito e un semplice ciclo for
che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima,
che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso
slider stilato nella milestone 1,
ma costruito dinamicamente attraverso JavaScript.
*/

const carouselImg = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp'
]

// seleziono dove voglio le immagini nella DOM
const slidesEl = document.querySelector('.slides')

for (let i = 0; i < carouselImg.length; i++) {
    //selezione l'url dell'immagine corrente
    //const slidesElUrl = carouselImg[i];
    //creo il markup da inserire
    const slidesElMark = `<img  height=300 src="${carouselImg[i]}" alt="">`
    //inserisco img nella dom
    slidesEl.insertAdjacentHTML(`beforeend`, slidesElMark)
}