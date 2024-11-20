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
          { stop: 0.0, color: '#a9fb91' },
          { stop: 1, color: '#05bf30' },
        ]}
        background='#888888'
      />
    </div>
  );
}
