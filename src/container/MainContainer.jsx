import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils';

import metadata from '../data/metadata';

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
            <Link to={`/boxoffice/${movie.rank}`}>
              { metadata.filter((datum) => datum.title === movie.movieNm).map((correspond) => (
                <div>
                  <div>
                    <img
                      key={correspond.poster}
                      src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/${correspond.poster}/${correspond.poster}_320.jpg`}
                      alt="Movie postser"
                    />
                  </div>
                  <div>
                    {correspond.tags}
                  </div>
                </div>
              ))}
            </Link>
            <div>
              제목 :
              {movie.movieNm}
              <br />
              누적 관객수 :
              { Number(movie.audiAcc) > 10000 ? Math.floor(Number(movie.audiAcc) / 10000) : 'Under 1' }
              만
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
