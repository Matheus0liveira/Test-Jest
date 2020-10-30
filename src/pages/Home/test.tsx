import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Main/>', () => {
  it('Render the Head', () => {
    const { container } = render(<Home />);

    expect(
      screen.getByRole('heading', { name: /Matheus/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
