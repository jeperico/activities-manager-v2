import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import Login from './page';

describe('Login Form', () => {
  it('should render the login form', () => {
    // Arrange
    render(<Login />);

    // Act
    const inputName = screen.getByPlaceholderText(/user/i);
    const inputPassword = screen.getByPlaceholderText(/password/i);

    // Assert
    expect(inputName).toBeVisible();
    expect(inputPassword).toBeVisible();
  });

  it('should show an error message when the user is not provided', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should show an error message when the password is not provided', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should show an error message when the password is less than 6 characters long', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should call the handleLoginUser function when the form is submitted', () => {
    // Arrange
    // Act
    // Assert
  });

});