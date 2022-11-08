import { render } from '@testing-library/react';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('shows 404 Not Found', () => {
    const { queryByText } = render(<NotFoundPage />);

    expect(queryByText('404 Not Found')).not.toBeNull();
  });

  it('img is visible', () => {
    const { getByRole } = render(<NotFoundPage />);

    expect(getByRole('img')).toBeVisible();
  });

  it('img contains correct attribute values', () => {
    const { getByRole } = render(<NotFoundPage />);

    expect(getByRole('img')).toHaveAttribute('src', 'images/404.jpeg');
    expect(getByRole('img')).toHaveAttribute('alt', '404 not found');
  });
});
