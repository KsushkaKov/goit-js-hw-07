import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const elements = [];

galleryItems.forEach((el) => {
  const galleryItem = document.createElement("div");
  galleryItem.className = "gallery__item";
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = el.original;
  const galleryImg = document.createElement("img");
  galleryImg.className = "gallery__image";
  galleryImg.src = el.preview;
  galleryImg.alt = el.description;
  galleryImg.setAttribute("data-source", el.original);

  galleryItem.append(galleryLink);
  galleryLink.append(galleryImg);
  elements.push(galleryItem);
});

gallery.append(...elements);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImg = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
      <img src="${selectedImg}">
  `);

  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
