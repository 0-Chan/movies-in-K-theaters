import fetchDailyBoxOffice from './api';

import BOXOFFICE from '../../fixtures/boxoffice';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchDailyBoxOffice', () => {
    beforeEach(() => {
      mockFetch(BOXOFFICE);
    });

    it('returns dailyboxoffice', async () => {
      const dailyboxoffice = await fetchDailyBoxOffice('20120101');

      const key = 'boxOfficeResult.dailyBoxOfficeList';
      const keys = key.split('.');
      const DAILYBOXOFFICE = BOXOFFICE[keys[0]][keys[1]];

      expect(dailyboxoffice).toEqual(DAILYBOXOFFICE);
    });
  });
});
