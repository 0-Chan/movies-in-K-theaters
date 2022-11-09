import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import BoxOfficeContainer from './BoxOfficeContainer';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

jest.mock('react-redux');

describe('BoxOfficeContainer', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders dailyBoxOffice', async () => {
      const { container } = render((
        <MemoryRouter>
          <BoxOfficeContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('박스오피스');

      DAILYBOXOFFICE.forEach(({ movieNm, rankOldAndNew }) => {
        expect(container).toHaveTextContent(movieNm);
        expect(container).toHaveTextContent(rankOldAndNew);
      });
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders loading', () => {
      const { container } = render((
        <MemoryRouter>
          <BoxOfficeContainer />
        </MemoryRouter>
      ));

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
