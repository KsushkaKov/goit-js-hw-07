import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = () => {
  const elements = galleryItems.map((el) => 
  `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
  <img 
  class="gallery__image"
  src="${el.preview}"
  data-source="${el.original}"
  alt="${el.description}"/>
  </a>
  </div>`).join('');
  gallery.innerHTML = elements;
};

galleryItem();

const closeImg = (event) => {
  if (event.code === "Escape") {
    instance.close();
  }

  gallery.removeEventListener("keydown", closeImg)
};

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" alt="${event.target.alt}">
  `);

  instance.show();

  gallery.addEventListener("keydown", closeImg);
});


// const elements = [];
// galleryItems.forEach((el) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   galleryLink.href = el.original;
//   const galleryImg = document.createElement("img");
//   galleryImg.className = "gallery__image";
//   galleryImg.src = el.preview;
//   galleryImg.alt = el.description;
//   galleryImg.setAttribute("data-source", el.original);

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImg);
//   elements.push(galleryItem);
// });

// gallery.append(...elements);
