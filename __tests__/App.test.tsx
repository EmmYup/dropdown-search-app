import React from 'react';
import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import App from '../src/App';

test('<AppCard />', () => {
  test('renders DropdownInput container', () => {
    render(<App />);

    const dropdownInputContainer = screen.getByTestId('dropdown-container');
    expect(dropdownInputContainer).toBeInTheDocument();
  });

  test('renders input element in DropdownInput component', () => {
    render(<App />);

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });
});
