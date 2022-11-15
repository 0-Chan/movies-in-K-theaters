import { useSelector } from 'react-redux';

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
        <div key={correspond.poster}>
          <div>
            <img
              src={`https://img.cgv.co.kr/Movie/Thumbnail/Poster/0000${correspond.poster.slice(0, 2)}/${correspond.poster}/${correspond.poster}_1000.jpg`}
              onError={handleError}
              alt="Movie postser"
            />
          </div>
          <div>{targetBoxOffice.movieNm}</div>
          <div>{targetBoxOffice.openDt}</div>
          <div>
            <div>{targetBoxOffice.rankInten}</div>
            <div>{targetBoxOffice.audiAcc}</div>
            <div>{targetBoxOffice.audiInten}</div>
            <div>{targetBoxOffice.salesAcc}</div>
            <div>{targetBoxOffice.salesShare}</div>
          </div>
        </div>
      ))}
    </>
  );
}
