import fetchDailyBoxOffice from './api';

import DAILYBOXOFFICE from '../../fixtures/dailyboxoffice';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchDailyBoxOffice', () => {
    beforeEach(() => {
      mockFetch(DAILYBOXOFFICE);
    });

    it('returns dailyboxoffice', async () => {
      const dailyboxoffice = await fetchDailyBoxOffice('20120101');

      const key = 'boxOfficeResult.dailyBoxOfficeList';
      const keys = key.split('.');

      expect(dailyboxoffice).toEqual(DAILYBOXOFFICE[keys[0]][keys[1]]);
    });
  });
});
