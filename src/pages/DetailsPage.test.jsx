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
      const params = { rank: '1' };

      const { container } = render(<DetailsPage params={params} />);

      expect(container).toHaveTextContent('미션임파서블');
    });
  });

  context('without dailyBoxOffice', () => {
    given('dailyBoxOffice', () => null);
    it('renders "Loading..."', () => {
      const params = { rank: '1' };

      const { container } = render(<DetailsPage params={params} />);

      expect(container).toHaveTextContent('Loading...');
    });
  });
});
