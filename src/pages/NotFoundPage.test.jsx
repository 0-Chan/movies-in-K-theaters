import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('shows 404 Not Found', () => {
    const { queryByText } = render(<NotFoundPage />);

    expect(queryByText('404 Not Found')).not.toBeNull();
  });

  it('img contains correct values', () => {
    const { getByRole } = render(<NotFoundPage />);

    expect(getByRole('img')).toHaveAttribute('src', 'images/404.jpeg');
    expect(getByRole('img')).toHaveAttribute('alt', '404 not found');
  });
});
