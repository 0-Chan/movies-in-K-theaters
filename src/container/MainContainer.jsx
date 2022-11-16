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

  const handleError = (e) => {
    e.target.src = '/images/onError-main.jpg';
  };

  return (
    <>
      <h2 className="text-3xl font-bold underline">
        박스오피스
      </h2>
      <ol className="grid grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-8 relative -mx-10 -mb-5/16 pt-16 h-[670px] lg:h-auto">
        {dailyboxoffice.map((movie) => (
          <li key={movie.movieCd}>
            <Link to={`/boxoffice/${movie.rank}`}>
              { metadata.filter((datum) => datum.title === movie.movieNm).map((correspond) => (
                <div key={correspond.poster}>
                  <div className="relative p-2 md:p-4 bg-[#1D1E23] rounded">
                    <img
                      src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_320.jpg`}
                      onError={handleError}
                      alt="Movie postser"
                    />
                  </div>
                  <div>
                    {correspond.tags.map((tag) => <span key={tag}>{tag}</span>)}
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
