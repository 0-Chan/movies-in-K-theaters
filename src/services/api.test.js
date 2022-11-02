import fetchBoxoffice from './api';

import BOXOFFICE from '../../fixtures/boxoffice';

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchBoxoffice', () => {
    beforeEach(() => {
      mockFetch(BOXOFFICE);
    });

    it('returns boxoffice', async () => {
      const boxoffice = await fetchBoxoffice({ targetDate: '20120101' });

      expect(boxoffice).toEqual(BOXOFFICE);
    });
  });
});
