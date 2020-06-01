import galleryItems from "./gallery-items.js";

const ul = document.querySelector("ul.gallery");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector('[data-action="close-lightbox"]');
const lightboxOverlay = document.querySelector(".lightbox__overlay");

const renderItems = (galleryItems) => {
  galleryItems.map(({ preview, original, description }) => {
    const li = document.createElement("li");
    li.classList.add("gallery__item");
    ul.appendChild(li);

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = original;
    li.appendChild(a);

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = preview;
    img.dataset.source = original;
    img.alt = description;
    a.appendChild(img);
  });
};

renderItems(galleryItems);

const openWindow = (e) => {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  lightbox.classList.add("is-open");
  lightbox.querySelector(".lightbox__image").src = e.target.src;
  lightbox.querySelector(".lightbox__image").alt = e.target.alt;
};
const closeWindow = (e) => {
  lightbox.classList.remove("is-open");
  lightbox.querySelector(".lightbox__image").src = "";
  lightbox.querySelector(".lightbox__image").alt = "";
};

button.addEventListener("click", closeWindow);
ul.addEventListener("click", openWindow);
