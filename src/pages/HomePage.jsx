import { useSelector } from 'react-redux';

import get from '../utils';

export default function HomePage() {
  const dailyboxoffice = useSelector(get('dailyboxoffice'));

  if (!dailyboxoffice) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {
        dailyboxoffice.map((movie) => (
          <div key={movie.movieCd}>
            {movie.movieNm}
          </div>
        ))
      }
    </>
  );
}
