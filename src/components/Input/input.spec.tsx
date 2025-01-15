import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '.';

describe('Input', () => {
  it('should render the input component', () => {
    // Arrange
    const props = {
      name: 'input',
      label: 'Input:',
      type: 'text',
      placeholder: 'Enter your input...',
      register: jest.fn(),
      errors: undefined,
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByRole('textbox', {name: /input/i});
    const label = screen.getByText(/input:/i);

    // Assert
    expect(input).toBeVisible();
    expect(label).toBeVisible();
  });

  it('should render the input component with error', () => {
    // Arrange
    const props = {
      name: 'input',
      label: 'Input:',
      type: 'text',
      placeholder: 'Enter your input...',
      register: jest.fn(),
      errors: { type: 'required', message: 'This is an error' },
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByRole('textbox', {name: /input/i});
    const label = screen.getByText(/input:/i);
    const error = screen.getByText('This is an error');

    // Assert
    expect(input).toBeVisible();
    expect(label).toBeVisible();
    expect(error).toBeVisible();
  });
});