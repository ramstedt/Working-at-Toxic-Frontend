'use client';
import styles from './ShowCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function ShowCard({ shows }) {
  return (
    <div className={styles.showsWrapper}>
      {shows.map((show) => (
        <Link key={show.id} href={`/tv-show/${show.id}`}>
          <div>
            <div className={styles.showCard}>
              {show.poster_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                  alt={`The poster for ${show.name}`}
                  width={200}
                  height={300}
                />
              ) : (
                <div className={styles.posterPlaceholder}>{show.name}</div>
              )}
            </div>
            <div>
              <p>{show.name}</p>
              <p>{show.first_air_date}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
