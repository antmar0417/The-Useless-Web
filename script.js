const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

let count = 5;
const apiKey = 'XuMYouBC7zDdVoDKQuZz38cIER7sZoivTbq_b1wt7cQ';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhotos() {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.download);
    item.setAttribute('target', '_blank');

    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
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
    // console.log(photosArray);
    displayPhotos();
  } catch (error) {
    //Catch Error Here
  }
}

getPhotos();
