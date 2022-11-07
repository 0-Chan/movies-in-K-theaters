import fetchDailyBoxOffice from '../services/api';

export function setDailyBoxOffice(dailyboxoffice) {
  return {
    type: 'setDailyBoxOffice',
    payload: { dailyboxoffice },
  };
}

export function loadInitialList(targetDate) {
  return async (dispatch) => {
    const dailyboxoffice = await fetchDailyBoxOffice(targetDate);
    dispatch(setDailyBoxOffice(dailyboxoffice));
  };
}
