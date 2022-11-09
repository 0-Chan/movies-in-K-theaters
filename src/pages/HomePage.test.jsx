import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HomePage from './HomePage';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

describe('HomePage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders HomePage', () => {
      const { container } = render(<HomePage />);

      expect(container).toHaveTextContent('박스오피스');
      DAILYBOXOFFICE.forEach(({ movieNm }) => {
        expect(container).toHaveTextContent(movieNm);
      });
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders loading', () => {
      const { container } = render(<HomePage />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
