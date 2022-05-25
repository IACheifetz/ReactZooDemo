import { render, screen } from '@testing-library/react';
import Fight from './Fight';

test('should render a button', () => {
  render(<Fight />);
  const linkElement = screen.getByText(/Unicorn grazes/i);
  expect(linkElement).toBeInTheDocument();
});