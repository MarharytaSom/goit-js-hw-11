const API_KEY = '44648144-e72e61b3f392a294e0f76f542';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  return await response.json();
}