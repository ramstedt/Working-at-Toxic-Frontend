import styles from './page.module.css';
import { fetchPopularTVShows } from '../lib/themoviedb';
import ShowCard from './components/ShowCard/ShowCard';

export default async function Home() {
  const popularShows = await fetchPopularTVShows();

  return (
    <div>
      <h1>Movie Database</h1>
      <h2>Popular TV Shows</h2>
      <div className={styles.showsWrapper}>
        {popularShows.results.map((show) => (
          <div key={show.id}>
            {console.log(show)}
            <ShowCard
              key={show.id}
              title={show.name}
              releaseDate={show.first_air_date}
              img={show.poster_path}
              rating={show.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
