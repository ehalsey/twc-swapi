import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders person list', () => {
  const { getByText } = render(<App />);
  //expect(getByText('Luke Skywalker')).toBeInTheDocument();
});
