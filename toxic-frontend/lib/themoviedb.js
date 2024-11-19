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
    const languages = await response.json();

    // Sort with English and Swedish first, for convenience.
    return languages.sort((a, b) => {
      const priority = ['English', 'Swedish'];

      const aPriority = priority.indexOf(a.english_name);
      const bPriority = priority.indexOf(b.english_name);

      // If both languages are in the priority list, sort by their order in the list.
      if (aPriority !== -1 && bPriority !== -1) {
        return aPriority - bPriority;
      }

      // If one language is in the priority list and the other isn't, prioritize the one in the list.
      if (aPriority !== -1) return -1;
      if (bPriority !== -1) return 1;

      // If neither language is in the priority list, sort them alphabetically.
      return a.english_name.localeCompare(b.english_name);
    });
  } catch (error) {
    console.error('Failed to fetch languages:', error);
    throw new Error('Failed to fetch languages');
  }
};
