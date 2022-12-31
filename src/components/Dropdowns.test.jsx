import { render, fireEvent } from '@testing-library/react';

import Dropdowns from './Dropdowns';

describe('Dropdowns', () => {
  it('toggles open state when button is clicked', async () => {
    const { getByTestId, getByText } = render(
      <Dropdowns />,
    );

    fireEvent.click(getByTestId('dropdown-button'));

    expect(getByText('CGV')).toBeInTheDocument();
  });
});
