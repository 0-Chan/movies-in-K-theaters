import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DetailsContainer from './DetailsContainer';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

jest.mock('react-redux');

describe('DetailsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders specific movie information', () => {
      const { container } = render(<DetailsContainer />);

      expect(container).toHaveTextContent('');
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders "정보가 없어요!"', () => {
      const { container } = render(<DetailsContainer />);

      expect(container).toHaveTextContent('정보가 없어요!');
    });
  });
});
