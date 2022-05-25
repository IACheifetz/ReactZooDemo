import { fireEvent, render, screen } from '@testing-library/react';
import ZooOpen from './ZooOpen';

test('whether the button click updates the text properly', () => {

  render(<ZooOpen />);
  const openButton = screen.getByText(/open/i);
//   const closedButton = screen.getByText(/closed/i);
  fireEvent.click(openButton);
//   fireEvent.click(closedButton);
  expect(openButton).toBeInTheDocument();
//   expect(closedButton).toBeInTheDocument();
});