import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import DetailsContainer from './DetailsContainer';

import BOXOFFICE from '../../fixtures/boxoffice';

const DAILYBOXOFFICE = BOXOFFICE.boxOfficeResult.dailyBoxOfficeList;

jest.mock('react-redux');

describe('DetailsContainer', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: given.dailyBoxOffice,
    }));
  });

  context('with dailyBoxOffice', () => {
    given('dailyBoxOffice', () => (DAILYBOXOFFICE));
    it('renders specific movie information', () => {
      const { container } = render(<DetailsContainer rank="1" />);

      expect(container).toHaveTextContent('미션임파서블');
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders "Loading..."', () => {
      const { container } = render(<DetailsContainer rank="1" />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
