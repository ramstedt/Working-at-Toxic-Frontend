import styles from './Rating.module.css';
import Progress from 'react-circle-progress-bar';

export default function Rating({ isVisible, voteAverage, isModal }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={isModal ? styles.modal : styles.wrapper}>
      <Progress
        progress={Math.round(voteAverage * 10)}
        hideBall={true}
        strokeWidth={20}
        reduction={0}
        className={styles.rating}
        gradient={[
          { stop: 0.0, color: '#48d721' },
          { stop: 1, color: '#0b833b' },
        ]}
        background='#888888'
      />
    </div>
  );
}
