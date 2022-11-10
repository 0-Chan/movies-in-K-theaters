import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import MainPage from './MainPage';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

describe('MainPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders MainPage', () => {
      const { container } = render(<MainPage />);

      expect(container).toHaveTextContent('박스오피스');
      DAILYBOXOFFICE.forEach(({ movieNm }) => {
        expect(container).toHaveTextContent(movieNm);
      });
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders loading', () => {
      const { container } = render(<MainPage />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
