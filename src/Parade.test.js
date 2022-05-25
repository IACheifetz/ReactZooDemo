import { fireEvent, render, screen } from '@testing-library/react';
import Parade from './Parade';

test('the emoji that renders depends on the animal prop', () => {

  render(<Parade animalArray={['fox', 'raccoon', 'rat', 'orangutan']} />);
  const foxEmoji = screen.getByText(/Fox/i);
  const raccoonEmoji = screen.getByText(/Raccoon/i);
  fireEvent.click(foxEmoji);
  fireEvent.click(raccoonEmoji);
  expect(foxEmoji).toBeInTheDocument();
  expect(raccoonEmoji).toBeInTheDocument();
});