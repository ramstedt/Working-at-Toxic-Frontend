import { fetchPopularTVShows, fetchLanguages } from '../lib/themoviedb';
import ShowCard from './components/ShowCard/ShowCard';
import SearchBar from './components/SearchBar/SearchBar';

export default async function Home() {
  const popularShows = await fetchPopularTVShows();
  const languages = await fetchLanguages();

  return (
    <div>
      <h1>TV Shows Database</h1>
      <SearchBar languages={languages} />
      <h2>Popular TV Shows</h2>
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
  );
}
