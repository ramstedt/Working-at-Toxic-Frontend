const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_THEMOVIEDB_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

export const fetchPopularTVShows = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
      options
    );

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
    const response = await fetch(
      `${BASE_URL}/tv/${id}?api_key=${API_KEY}`,
      options
    );

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
