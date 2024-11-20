import styles from './Poster.module.css';
import Image from 'next/image';

export default function Poster({ show, width, height }) {
  return (
    <>
      {show.poster_path ? (
        <Image
          src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
          alt={`The poster for ${show.name}`}
          width={width}
          height={height}
        />
      ) : (
        <div className={styles.posterPlaceholder}>{show.name}</div>
      )}
    </>
  );
}
