const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
const titleText = document.querySelector('#site-title');
const titleBackgroundColor = document.querySelector('.site-title');
const intFrameWith = window.innerWidth;
let count = 0;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let colors = [];
let ready = false;
let initialLoad = true;

// Checking the frame width and changing the title text and the number of images on load
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

// Unsplash API
const apiKey = 'XuMYouBC7zDdVoDKQuZz38cIER7sZoivTbq_b1wt7cQ';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Filling the array with random colors
while (colors.length < 100) {
  colors.push(`rgb(${rand(0, 255)}, ${rand(0, 255)}, ${rand(0, 255)})`);
}

// Random number generator
function rand(frm, to) {
  return ~~(Math.random() * (to - frm)) + frm;
}

// On click changes the background on text-title
titleBackgroundColor.addEventListener('click', () => {
  titleBackgroundColor.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});

// Changing the title text when the user resizes the frame
window.addEventListener('resize', () => {
  let widthOutput = window.innerWidth;
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

// Checking if the images are loaded
function imageLoaded() {
  imagesLoaded++;

  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 20;
    apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  }
}

// Setting attributes on DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// This function creates elements for links & photos and adds them to the DOM
function dispplayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  photosArray.forEach((photo) => {
    // Creates <a> to link to Unsplash
    const item = document.createElement('a');

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });

    // Creates <img> for photo
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: `likes: ${photo.likes}`,
    });

    img.addEventListener('load', imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Gets photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    dispplayPhotos();
  } catch (error) {
    window.alert('Try again later!');
  }
}

// Checking to see if scrolling near bottom of page to load more photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
getPhotos();
