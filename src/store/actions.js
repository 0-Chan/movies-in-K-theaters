import fetchDailyBoxOffice from '../services/api';

export function setDailyBoxOffice(dailyBoxOffice) {
  return {
    type: 'setDailyBoxOffice',
    payload: { dailyBoxOffice },
  };
}

export function loadInitialList(targetDate) {
  return async (dispatch) => {
    const dailyBoxOffice = await fetchDailyBoxOffice(targetDate);
    dispatch(setDailyBoxOffice(dailyBoxOffice));
  };
}
