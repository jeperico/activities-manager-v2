/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';

import FormArea from '.';
import { LoginUserSchema } from '@/app/login/login-form';

beforeAll(() => {
  HTMLFormElement.prototype.submit = jest.fn();
});

describe('Form Area', () => {
  it('should render the form area', () => {
    // Arrange
    const handleLoginUser = (data: LoginUserSchema) => {
      console.log(data.password);
      console.log(data.user);
    }
    render(<FormArea onSubmit={handleLoginUser}><p>Form Area</p></FormArea>);

    // Act
    const formArea = screen.getByText('Form Area');

    // Assert
    expect(formArea).toBeVisible();
  });

  it('should call onSubmit when form is submitted', () => {
    // Arrange
    const mockHandleSubmit = jest.fn();
    render(<FormArea onSubmit={mockHandleSubmit}><button type="submit">Submit</button></FormArea>);

    // Act
    const submitButton = screen.getByText('Submit');
    act(() => {
      fireEvent.submit(submitButton);
    });

    // Assert
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('should render children elements', () => {
    // Arrange
    render(<FormArea onSubmit={() => {}}><p>Child Element</p></FormArea>);

    // Act
    const childElement = screen.getByText('Child Element');

    // Assert
    expect(childElement).toBeVisible();
  });
});
