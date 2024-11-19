const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_THEMOVIEDB_ACCESS_TOKEN;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};

export const fetchPopularTVShows = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tv/popular`, options);

    if (!response.ok) {
      throw new Error(
        `Error fetching popular TV shows: ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch popular TV shows:', error);
    throw error;
  }
};

export const fetchTvShow = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/tv/${id}`, options);

    if (!response.ok) {
      throw new Error(
        `Error fetching TV show with id "${id}": ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch TV show with id "${id}":`, error);
    throw error;
  }
};

export const fetchLanguages = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/configuration/languages`,
      options
    );
    if (!response.ok) {
      throw new Error(`Error fetching languages: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch languages:', error);
    throw new Error('Failed to fetch languages');
  }
};
