import { useSelector } from 'react-redux';

import get from '../utils';

export default function MainContainer() {
  const dailyboxoffice = useSelector(get('dailyBoxOffice'));

  if (!dailyboxoffice) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <h2>
        박스오피스
      </h2>
      <ol>
        {dailyboxoffice.map((movie) => (
          <li key={movie.movieCd}>
            <p>
              제목:
              {movie.movieNm}
              개봉일:
              {movie.openDt}
              {movie.rankOldAndNew}
              {movie.audiCnt}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
