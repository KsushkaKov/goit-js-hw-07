import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const elements = [];

galleryItems.forEach((el) => {
  const galleryItem = document.createElement("a");
  galleryItem.className = "gallery__item";
  galleryItem.href = el.original;
  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.src = el.preview;
  galleryImg.alt = el.description;
  galleryImg.setAttribute("title", el.description);

  galleryItem.append(galleryImg);
  elements.push(galleryItem);
});

gallery.append(...elements);

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});
