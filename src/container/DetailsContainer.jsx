import { useSelector } from 'react-redux';

import { get } from '../utils';

import NotFoundPage from '../pages/NotFoundPage';

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

  return (
    <>
      <div>
        <div>
          {
            targetBoxOffice
            && targetBoxOffice.movieNm
          }
        </div>
        {/* <div>{targetBoxOffice.movieNm}</div>
        <div>{targetBoxOffice.openDt}</div>
        <div>{targetBoxOffice.audiAcc}</div>
        <div>{targetBoxOffice.audiChange}</div>
        <div>{targetBoxOffice.salesChange}</div>
        <div>{targetBoxOffice.salesShare}</div>
        <div>{targetBoxOffice.rankInten}</div> */}
      </div>
      {' '}
    </>
  );
}
