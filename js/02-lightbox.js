import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryItem = () => {
  const elements = galleryItems.map((el) => 
  `<a class="gallery__item" href="${el.original}">
  <img 
  class="gallery__image"
  src="${el.preview}"
  title="${el.description}"
  alt="${el.description}"/>
  </a>
  `).join('');
  gallery.innerHTML = elements;
};

galleryItem();


new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
