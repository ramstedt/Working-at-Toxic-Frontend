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
function filterByLanguage(data, language) {
  const filteredResults = data.results.filter(
    (item) =>
      item.original_language &&
      item.original_language.toLowerCase() === language.toLowerCase()
  );

  return {
    ...data,
    results: filteredResults,
  };
}

function sortByLatestAirDate(data) {
  const sortedResults = data.results.sort((a, b) => {
    const dateA = new Date(a.first_air_date || 0);
    const dateB = new Date(b.first_air_date || 0);
    return dateB - dateA;
  });

  return {
    ...data,
    results: sortedResults,
  };
}

export const fetchSearchResults = async (title, language) => {
  // search must contain a title and cannot handle language parameter.
  // discover can handle language parameter but cannot handle title parameter.
  // solving the problem by only using search if title is present.
  // if title is not present, use discover which supports language filtering.
  const url = title
    ? `${BASE_URL}/search/tv?query=${title}`
    : `${BASE_URL}/discover/tv?with_original_language=${language}`;

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching search results: ${response.statusText}`);
    }

    const data = await response.json();

    let processedData = data;

    // If title AND language is present, filter by language
    if (title && language) {
      processedData = filterByLanguage(data, language);
    }

    // Sort the results by the latest air date
    return sortByLatestAirDate(processedData);
  } catch (error) {
    console.error('Search error:', error);
    throw error;
  }
};
