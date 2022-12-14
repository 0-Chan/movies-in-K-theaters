const initialState = {
  dailyBoxOffice: [],
};

const reducers = {
  setDailyBoxOffice(state, { payload: { dailyBoxOffice } }) {
    return {
      ...state,
      dailyBoxOffice,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
