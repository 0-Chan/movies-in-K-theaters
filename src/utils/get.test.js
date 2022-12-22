import get from './get';

describe('get', () => {
  const state = {
    movieNm: '테넷',
  };

  it('returns selected object property', () => {
    const f = get('movieNm');

    expect(f(state)).toBe('테넷');
  });
});
