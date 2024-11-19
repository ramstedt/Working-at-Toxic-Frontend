import styles from './SearchButton.module.css';

export default function SearchButton({ text }) {
  return <button className={styles.searchButton}>{text}</button>;
}
