import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import BOXOFFICE from '../fixtures/boxoffice';

const key = 'boxOfficeResult.dailyBoxOfficeList';
const keys = key.split('.');
const DAILYBOXOFFICE = BOXOFFICE[keys[0]][keys[1]];

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      dailyBoxOffice: DAILYBOXOFFICE,
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders the / page', () => {
      const { container } = renderApp({ path: '/' });

      expect(dispatch).toBeCalled();

      expect(container).toHaveTextContent('박스오피스');
      expect(container).toHaveTextContent('미션임파서블');
    });
  });

  context('with path /about', () => {
    it('renders the /about page', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });
});
