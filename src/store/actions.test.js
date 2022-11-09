import thunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

import { loadInitialList, setDailyBoxOffice } from './actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../services/api');

describe('actions', () => {
  let store;

  describe('loadInitialList', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setDailyBoxOffice', async () => {
      await store.dispatch(loadInitialList({ targetDate: '20120101' }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setDailyBoxOffice());
    });
  });
});
