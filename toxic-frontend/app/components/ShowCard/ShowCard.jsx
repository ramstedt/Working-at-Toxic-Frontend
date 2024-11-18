'use client';
import styles from './ShowCard.module.css';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ShowCard({ title, releaseDate, img, rating }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Link
      href='/'
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
      onClick={() => setShowModal(!showModal)}
    >
      <div>
        <div className={styles.showCard}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${img}`}
            alt={`The poster for ${title}`}
            width={200}
            height={300}
          />
          {showModal && (
            <div className={styles.modal}>
              <p>Rating: {rating}</p>
            </div>
          )}
        </div>
        <div>
          <p>{title}</p>
          <p>{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
}
