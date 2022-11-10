import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import get from '../utils';

export default function DetailsContainer({ rank }) {
  const dailyboxoffice = useSelector(get('dailyBoxOffice'));
  console.log('🚀 | dailyboxoffice', dailyboxoffice);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (dailyboxoffice.length === 10) {
      setLoaded(true);
    }
  }, [dailyboxoffice]);

  const targetBoxOffice = dailyboxoffice[rank];

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
      {/* <div>
        {targetBoxOffice.movieCd}
      </div>
      <div>
        {targetBoxOffice.movieNm}
      </div>
      <div>
        {targetBoxOffice.audiAcc}
      </div> */}
    </>
  );
}
