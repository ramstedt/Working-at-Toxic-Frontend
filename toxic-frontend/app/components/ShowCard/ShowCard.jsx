'use client';
import styles from './ShowCard.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Rating from '../_atoms/Rating/Rating';
import Poster from '../_atoms/Poster/Poster';

export default function ShowCard({ shows }) {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className={styles.showsRibbon}>
      {shows.map((show) => (
        <Link key={show.id} href={`/tv-show/${show.id}`}>
          <div className={styles.showsWrapper}>
            <div
              className={styles.showCard}
              onMouseEnter={() => setActiveModal(show.id)}
              onMouseLeave={() => setActiveModal(null)}
            >
              <Poster show={show} width='300' height='400' />
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
