import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js'

describe('App Component', () => {
  test('renders header text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Web Component Library/i);
    expect(headerElement).toBeInTheDocument();
  });

});
