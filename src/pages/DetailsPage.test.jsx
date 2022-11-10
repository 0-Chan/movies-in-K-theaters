import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DetailsPage from './DetailsPage';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

describe('DetailsPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders specific movie information', () => {
      const { container } = render(<DetailsPage />);

      expect(container).toHaveTextContent('');
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders "정보가 없어요!"', () => {
      const { container } = render(<DetailsPage />);

      expect(container).toHaveTextContent('정보가 없어요!');
    });
  });
});
