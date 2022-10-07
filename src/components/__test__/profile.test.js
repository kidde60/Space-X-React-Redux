import { render, screen } from '@testing-library/react';
import Profile from '../profile/profile';

it('Check for number of heading elements in Profile', () => {
  render(<Profile />);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(2);
});
