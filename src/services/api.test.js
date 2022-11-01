import fetchBoxoffice from './api';

import BOXOFFICE from '../../fixtures/boxoffice';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockRejectedValue({
      async json() { return data; },
    });
  };

  describe('fetchBoxoffice', () => {
    beforeEach(() => {
      mockFetch(BOXOFFICE);
    });

    it('returns boxoffice', async () => {
      const data = await fetchBoxoffice({ targetDate: '20120101' });
      const boxoffice = JSON.stringify(data);

      expect(boxoffice).toEqual(BOXOFFICE);
    });
  });
});
