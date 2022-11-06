import fetchDailyBoxOffice from '../services/api';

export function setDailyBoxOffice(dailyboxoffice) {
  return {
    type: 'setDailyBoxOffice',
    payload: { dailyboxoffice },
  };
}

export function loadInitialList() {
  return async (dispatch) => {
    const dailyboxoffice = await fetchDailyBoxOffice();
    dispatch(setDailyBoxOffice(dailyboxoffice));
  };
}
