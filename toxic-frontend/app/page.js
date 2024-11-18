import { fetchPopularTVShows } from '../lib/themoviedb';

export default async function Home() {
  const popularShows = await fetchPopularTVShows();

  return (
    <div>
      <h1>Movie Database</h1>

      {console.log(popularShows)}
    </div>
  );
}
