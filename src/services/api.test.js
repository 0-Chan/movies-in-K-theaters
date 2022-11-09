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

      const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

      expect(dailyboxoffice).toEqual(DAILYBOXOFFICE);
    });
  });
});
