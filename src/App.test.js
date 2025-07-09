import { render, screen } from '@testing-library/react';
import App from './App';

<<<<<<< HEAD
test('renders My Todo List title', () => {
  render(<App />);
  const title = screen.getByText(/My Todo List/i);
  expect(title).toBeInTheDocument();
=======
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 5bbb7a6ae83491af909db39f045ab5fcafa9003a
});
