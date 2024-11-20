import styles from './ShowDetailed.module.css';
import Rating from '../_atoms/Rating/Rating';
import Poster from '../_atoms/Poster/Poster';

export default function ShowDetailed({ show }) {
  return (
    <div className={styles.showWrapper}>
      <div>
        <Poster show={show} width='300' height='400' />
      </div>
      <div className={styles.showDetails}>
        <div>
          <h1>{show.name}</h1>
          {show.first_air_date.slice(0, 4)}
        </div>
        <div className={styles.ratingWrapper}>
          <Rating
            voteAverage={show.vote_average}
            isModal={false}
            isVisible={true}
          />
          <div>
            User
            <br />
            Score
          </div>
        </div>
        <div>
          <h2>Overview</h2>
          {show.overview}
        </div>
        <div>
          <h2>Seasons ({show.seasons.length})</h2>
          <ul>
            {show.seasons.map((season, key) => {
              return (
                <li key={`${season.name} ${key}`}>
                  <h3>{season.name}</h3>
                  <div className={styles.seasonAirDate}>{season.air_date}</div>
                  <p>{season.overview}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
