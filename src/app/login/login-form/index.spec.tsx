/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import '@testing-library/jest-dom';

import Login from '../page';
import LoginForm from '.';



describe('Login Form', () => {
  it('should render the login form', () => {
    // Arrange
    render(<Login />);

    // Act
    const formTitle = screen.getByRole('heading', {name: /welcome/i});
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const buttonSubmit = screen.getByRole('button', {name: /login/i});

    // Assert
    expect(formTitle).toBeVisible();
    expect(inputName).toBeVisible();
    expect(inputPassword).toBeVisible();
    expect(buttonSubmit).toBeVisible();
  });

  it('should show an error message when fields is not provided', async () => {
    // Arrange
    render(<Login />);

    // Act
    const buttonSubmit = screen.getByText(/login/i);
    act(() => {
      fireEvent.click(buttonSubmit);
    })

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText('User must be at least 2 characters long')
      ).toBeVisible();
    });
    await waitFor(() => {
      expect(
        screen.getByText('Password must be at least 6 characters long')
      ).toBeVisible();
    });
  });

  it('should show an error message when the fields are small', async () => {
    // Arrange
    render(<Login />);

    // Act
    const buttonSubmit = screen.getByText(/login/i);
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    act(() => {
      fireEvent.change(inputName, { target: { value: faker.string.alphanumeric() } });
      fireEvent.change(inputPassword, { target: { value: faker.string.alphanumeric(5) } });
      fireEvent.click(buttonSubmit);
    })

    // Assert
    await waitFor(() => {
      expect(
        screen.getByText('User must be at least 2 characters long')
      ).toBeVisible();
    });
    await waitFor(() => {
      expect(
        screen.getByText('Password must be at least 6 characters long')
      ).toBeVisible();
    });
  });

  it('should call the handleLoginUser function when the form is submitted', async () => {
    // Arrange
    const mockHandleLoginUser = jest.fn();
    render(<LoginForm handleLoginUser={mockHandleLoginUser} />);

    // Act
    const person = {
      user: faker.person.firstName(),
      password: faker.string.alphanumeric(8)
    }
    const buttonSubmit = screen.getByText(/login/i);
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);

    act(() => {
      fireEvent.change(inputName, { target: { value: person.user } });
      fireEvent.change(inputPassword, { target: { value: person.password } });
      fireEvent.click(buttonSubmit);
    })

    // Assert
    await waitFor(() => {
      expect(
        screen.queryByText('User must be at least 2 characters long')
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.queryByText('Password must be at least 6 characters long')
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(mockHandleLoginUser).toHaveBeenCalledTimes(1);
    });
  });

});