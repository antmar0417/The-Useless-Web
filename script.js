const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let count = 0;
let intFrameWith = window.innerWidth;
let titleText = document.querySelector('#site-title');

// console.log(intFrameWith);
if (intFrameWith >= 1024) {
  titleText.textContent = 'Scroll Down To See More Images';
  count = 9;
}
if (intFrameWith < 1024 && intFrameWith >= 768) {
  titleText.textContent = 'Scroll Down To See More';
  count = 6;
}
if (intFrameWith < 768) {
  titleText.textContent = 'Scroll Down';
  count = 3;
}
console.log(count);

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true;

// Unsplash API
const apiKey = 'XuMYouBC7zDdVoDKQuZz38cIER7sZoivTbq_b1wt7cQ';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

window.addEventListener('resize', () => {
  let widthOutput = window.innerWidth;
  // console.log(widthOutput);
  if (widthOutput >= 1024) {
    titleText.textContent = 'Scroll Down To See More Images';
  }
  if (widthOutput < 1024 && widthOutput >= 768) {
    titleText.textContent = 'Scroll Down To See More';
  }
  if (widthOutput < 768) {
    titleText.textContent = 'Scroll Down';
  }
});

function imageLoaded() {
  imagesLoaded++;
  //console.log(imagesLoaded)

  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 20;
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

function dispplayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    const item = document.createElement('a');

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Create <img> for photo
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: `likes: ${photo.likes}`,
    });
    // ---Test to add a text as hover---
    const text = document.createElement('span');
    text.innerText = `Click on the image to download`;

    text.id = '::span-text';
    text.style.cssText =
      'text-align: center; padding-right: auto; padding-left: 4.5rem;width: 400px; background-color: red; color: white;';

    // text.style = `color:white`;
    // text.style = `text-align: center`;
    // article.appendChild(text);
    //       ---End---

    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
    imageContainer.appendChild(text);
  });
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    dispplayPhotos();
    console.log(photosArray);
  } catch (error) {
    window.alert('Try again later!');
  }
}

window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
  //console.log('scrolled');
});
getPhotos();
