import styles from './SearchButton.module.css';

export default function SearchButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.searchButton}>
      {text}
    </button>
  );
}
