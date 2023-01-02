import { convertDateFormat } from './convertDateFormat';

describe('convertDateFormat', () => {
  const date = new Date(2022, 11, 25);

  it('returns YYYYMMDD date format', () => {
    const d = convertDateFormat(date);

    expect(d).toBe('20221225');
  });
});
