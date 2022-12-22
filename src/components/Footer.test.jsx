import { render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders Footer', () => {
    const { container } = render(
      <Footer />,
    );

    expect(container).toHaveTextContent('0-Chan');
  });
});
