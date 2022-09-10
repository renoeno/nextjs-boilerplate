import { screen } from '@testing-library/react';
import { BaseComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<BaseComponent />', () => {
  it('should render', () => {
    renderTheme(<BaseComponent />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
