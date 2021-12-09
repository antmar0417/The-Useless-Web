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

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true;

// Unsplash API
const apiKey = 'XuMYouBC7zDdVoDKQuZz38cIER7sZoivTbq_b1wt7cQ';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

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
      href: photo.links.download,
      target: '_blank',
    });

    // Create <img> for photo
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

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    dispplayPhotos();
    console.log(photosArray);
  } catch (error) {
    //Catch Error Here
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
