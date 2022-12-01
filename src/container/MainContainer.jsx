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
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="max-w-screen-xl my-0 mx-auto w-full overflow-y-hidden">
        <h1 className="text-6xl text-black mb-8 text-center font-bold">
          박스오피스 무비챠-트
        </h1>
      </div>
      <div className="full-column max-w-full mx-auto py-1 md:py-3 px-1">
        <div className="mb-12 md:mb-0" aria-roledescription="carousel">
          <div className="relative">
            <ul className="absolute flex mx-auto wh-full bg-smoky">
              {dailyboxoffice.map((movie) => (
                <li
                  key={movie.movieCd}
                  className="border-solid border-2 border-indigo-400"
                >
                  <Link to={`/boxoffice/${movie.rank}`}>
                    {metadata.filter((datum) => datum.title === movie.movieNm).map((correspond) => (
                      <div
                        key={correspond.poster}
                        className=""
                      >
                        <img
                          src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_320.jpg`}
                          onError={handleError}
                          alt="Movie postser"
                          className="top-0 w-full h-full object-cover"
                        />
                        <p>
                          {correspond.tags.map((tag) => <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded" key={tag}>{tag}</span>)}
                        </p>
                      </div>
                    ))}
                  </Link>
                  <div>
                    <h3 className="font-medium mb-1 text-white truncate">
                      {movie.movieNm}
                    </h3>
                    <p className="text-sm">
                      누적 관객 :
                      { Number(movie.audiAcc) > 10000 ? Math.floor(Number(movie.audiAcc) / 10000) : 'Under 1' }
                      만
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
