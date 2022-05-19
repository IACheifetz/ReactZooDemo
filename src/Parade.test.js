import { render, screen } from '@testing-library/react';
import Parade from './Parade';

test('the emoji that renders depends on the animal prop', () => {

  render(<Parade animalArray={['fox', 'raccoon', 'rat', 'orangutan']} />);
  const foxEmoji = screen.getByText(/🦊/i);
  expect(foxEmoji).toBeInTheDocument();

  const raccoonEmoji = screen.getByText(/🦝/i);
  expect(raccoonEmoji).toBeInTheDocument();
});