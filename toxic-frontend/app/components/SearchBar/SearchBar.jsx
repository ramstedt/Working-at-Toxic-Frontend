'use client';
import SearchButton from '../_atoms/SearchButton/SearchButton';
import styles from './SearchBar.module.css';
import { useState } from 'react';
import { fetchSearchResults } from '@/lib/themoviedb';
import ShowCard from '../ShowCard/ShowCard';

export default function SearchBar({ languages }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchSearchResults(title, language);
      setResults(data.results);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };
  return (
    <div>
      <input
        type='text'
        placeholder='Search by title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.searchBox}
      />
      <select
        id='language'
        name='language'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className={styles.searchBox}
      >
        <option value=''>All languages</option>
        {languages.map((language) => (
          <option key={language.iso_639_1} value={language.iso_639_1}>
            {language.english_name}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>

      {results && (
        <div style={{ marginTop: '20px' }}>
          <h3>Search Results</h3>
          {results.length > 0 ? (
            <ShowCard shows={results} />
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
