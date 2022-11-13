import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils';

import movies from '../data/moives';

export default function MainContainer() {
  const dailyboxoffice = useSelector(get('dailyBoxOffice'));

  if (!dailyboxoffice) {
    return (
      <p>Loading...</p>
    );
  }

  const hell = dailyboxoffice[0];
  console.log('🚀 | dailyboxoffice', dailyboxoffice);
  // console.log('🚀 | hell', hell && hell.movieNm);

  // console.log(true && movies.filter((data) => data.title === hell.movieNm));

  return (
    <>
      <h2>
        박스오피스
      </h2>
      <ol>
        {dailyboxoffice.map((movie) => (
          <li key={movie.movieCd}>
            <Link to={`/boxoffice/${movie.rank}`}>
              <div>
                { movies.filter((data) => data.title === movie.movieNm).map((user) => {
                  return <p> {user.poster} </p>
                }) }
              </div>
              {/* <img
                src={
                      `https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/
                      86119/86119
                      _320.jpg`
                    }
                alt="Movie postser"
              /> */}
            </Link>
            <p>
              제목:
              {movie.movieCd}
              <br />
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
