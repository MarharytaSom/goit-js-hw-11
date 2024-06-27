import { fetchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages, showNotification, toggleLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = event.currentTarget.elements.query.value.trim();

    if (!query) {
      showNotification('Please enter a search query');
      return;
    }

    clearGallery();
    toggleLoader(true);

    try {
      const data = await fetchImages(query);
      toggleLoader(false);

      if (data.hits.length === 0) {
        showNotification('Sorry, there are no images matching your search query. Please try again!');
        return;
      }

      renderImages(data.hits);
    } catch (error) {
      toggleLoader(false);
      showNotification('An error occurred while fetching images. Please try again.');
    }
  });
});