'use client';
import styles from './ShowCard.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '../_atoms/Rating/Rating';

export default function ShowCard({ shows }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className={styles.showsWrapper}>
      {shows.map((show) => (
        <Link key={show.id} href={`/tv-show/${show.id}`}>
          <div>
            <div
              className={styles.showCard}
              onMouseEnter={() => setActiveModal(show.id)}
              onMouseLeave={() => setActiveModal(null)}
            >
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

              <Rating
                isVisible={activeModal === show.id}
                voteAverage={show.vote_average}
                isModal={true}
              />
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
