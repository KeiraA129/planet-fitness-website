import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Todo List title', () => {
  render(<App />);
  const title = screen.getByText(/My Todo List/i);
  expect(title).toBeInTheDocument();
});
