'use client';
import SearchButton from '../_atoms/SearchButton/SearchButton';
import styles from './SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({ languages }) {
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');

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
      <SearchButton text='Search' />
    </div>
  );
}
