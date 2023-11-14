import { render, screen } from '@testing-library/react';
import App from './App';

test('Art 1', () => {
  render(<App />);
  const linkElement = screen.getByText('Art 1');
  expect(linkElement).toBeInTheDocument();
});
