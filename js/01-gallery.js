import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const makeOneImageMarkup = ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source=${original}>
        </a>
    </div>
    `;
};
const makeGaleryMarkup = galleryItems
    .map(makeOneImageMarkup)
    .join('');
gallery.insertAdjacentHTML('beforeend', makeGaleryMarkup);
// console.log(makeGaleryMarkup);

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const linkOnOrigImage = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${linkOnOrigImage}" width="800" height="600">
    `);
    instance.show(() => console.log('lightbox now visible'));
});

//   1. Создание и рендер разметки по массиву данных galleryItems и предоставленному 
// шаблону элемента галереи.
//   2. Реализация делегирования на div.gallery и получение url большого изображения.
//   3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) 
// файлы библиотеки.
//   4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься 
// с документацией и примерами.
//   5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки 
// basicLightbox.

//   Добавь закрытие модального окна по нажатию клавиши Escape. 
// Сделай так, чтобы прослушивание клавиатуры было только пока 
// открыто модальное окно. У библиотеки basicLightbox есть метод 
// для программного закрытия модального окна.