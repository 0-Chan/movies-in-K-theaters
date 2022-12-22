import { useSelector } from 'react-redux';
import { TrendingUp, TrendingDown } from 'react-feather';

import { get } from '../utils';

import NotFoundPage from '../pages/NotFoundPage';
import metadata from '../data/metadata';

export default function DetailsContainer({ rank }) {
  const vaildRanks = Array.from({ length: 10 }, (_, index) => index + 1);
  const isVaild = vaildRanks.includes(Number(rank));
  if (!isVaild) {
    return (<NotFoundPage />);
  }
  const dailyboxoffice = useSelector(get('dailyBoxOffice'));

  if (!dailyboxoffice) {
    return (
      <p>Loading...</p>
    );
  }

  const targetBoxOffice = dailyboxoffice[rank - 1];

  const handleError = (e) => {
    e.target.src = '/images/onError-details.jpg';
  };

  return (
    <>
      { metadata.filter((datum) => datum.title === targetBoxOffice?.movieNm).map((correspond) => (
        <div key={correspond.poster} className="flex">
          <div className="flex">
            <img
              src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_1000.jpg`}
              onError={handleError}
              alt="Movie postser"
              className="rounded-lg ml-6 md:ml-10 w-96 border-[6px] border-gray-500 bg-gray-900"
            />
            <div className="ml-4">
              <h1 className="text-7xl text-center text-gray-900 truncate mb-2">
                {targetBoxOffice.movieNm}
              </h1>
              <h2 className="text-4xl text-gray-800 mt-4">
                - 상세 정보
              </h2>
              <div className="text-xl leading-relaxed">
                <div>
                  영화 개봉일 :&nbsp;
                  {targetBoxOffice.openDt}
                </div>
                <div>
                  누적 관람객 :&nbsp;
                  {Number(targetBoxOffice.audiAcc).toLocaleString()}
                  명
                </div>
              </div>
              <h2 className="text-3xl text-gray-800 mt-4">
                - 사업 실적
              </h2>
              <div>
                <div className="text-xl leading-relaxed">
                  누적 매출 :&nbsp;
                  {Number(targetBoxOffice.salesAcc).toLocaleString()}
                  원
                </div>
                <div>
                  당일 매출 비율 :
                  <br />
                  {targetBoxOffice.salesShare}
                  %
                  <br />
                  (당일 매출 총액 대비)
                </div>
              </div>
            </div>
            <div className="text-center">
              {
                targetBoxOffice.rankInten > 0
                  ? <TrendingUp size="32px" className="text-red-700" />
                  : <TrendingDown size="32px" className="text-blue-700" />
              }
              {Math.abs(targetBoxOffice.rankInten)}
              단계
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
