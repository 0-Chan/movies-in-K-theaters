import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  context('with ', () => {
    it('z', () => {
      const { container } = render(
        <MemoryRouter initialEntries="/">
          <Header />
        </MemoryRouter>,
      );

      expect(container).toHaveTextContent('헤더');
    });
  });
});
