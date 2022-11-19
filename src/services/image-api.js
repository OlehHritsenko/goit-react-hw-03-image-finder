const URL = 'https://pixabay.com/api/';
const KEY = '11240134-58b8f655e9e0f8ae8b6e8e7de';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

async function fetchImages(query, page = 1) {
  const response = await fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`);
  return await response.json();
}

export default fetchImages;