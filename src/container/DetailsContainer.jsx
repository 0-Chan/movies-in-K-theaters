import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import NotFoundPage from '../pages/NotFoundPage';
import get from '../utils';

export default function DetailsContainer({ rank }) {
  const vaildRanks = Array.from({ length: 10 }, (_, index) => index + 1);
  const isVaild = vaildRanks.includes(Number(rank));
  if (!isVaild) {
    return (<NotFoundPage />);
  }

  const dailyboxoffice = useSelector(get('dailyBoxOffice'));
  const targetBoxOffice = dailyboxoffice[rank - 1];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (dailyboxoffice.length === 10) {
      setLoaded(true);
    }
  }, [dailyboxoffice]);

  return (
    <>
      {
        loaded
          ? (
            <div>
              <div>{targetBoxOffice.movieNm}</div>
              <div>{targetBoxOffice.openDt}</div>
              <div>{targetBoxOffice.audiAcc}</div>
              <div>{targetBoxOffice.audiChange}</div>
              <div>{targetBoxOffice.salesChange}</div>
              <div>{targetBoxOffice.salesShare}</div>
              <div>{targetBoxOffice.rankInten}</div>
            </div>
          )
          : <span>로딩</span>
      }
      {' '}
    </>
  );
}
