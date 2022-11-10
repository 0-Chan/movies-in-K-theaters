import { get, convertDateFormat } from './utils';

describe('get', () => {
  const state = {
    movieNm: '테넷',
  };

  it('returns selected object property', () => {
    const f = get('movieNm');

    expect(f(state)).toBe('테넷');
  });
});

describe('convertDateFormat', () => {
  const date = new Date(2022, 11, 25);

  it('returns YYYYMMDD date format', () => {
    const d = convertDateFormat(date);

    expect(d).toBe('20221225');
  });
});
