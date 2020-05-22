import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
//check out https://www.pluralsight.com/guides/how-to-test-react-components-in-typescript
test('renders person list', async () => {
  const wrapper = render(<App />);
  //expect(getByText('Luke Skywalker')).toBeInTheDocument();
});
