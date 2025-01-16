/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react';
import { faker } from '@faker-js/faker';
import '@testing-library/jest-dom';

import Login from '../page';
import LoginForm from '.';

describe('Login Form', () => {
  it('should render the login form', () => {
    render(<Login />);
    const formTitle = screen.getByRole('heading', {name: /welcome/i});
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    const buttonSubmit = screen.getByRole('button', {name: /login/i});
    expect(formTitle).toBeVisible();
    expect(inputName).toBeVisible();
    expect(inputPassword).toBeVisible();
    expect(buttonSubmit).toBeVisible();
  });

  it('should show an error message when fields are not provided', async () => {
    render(<Login />);
    const buttonSubmit = screen.getByText(/login/i);
    act(() => {
      fireEvent.click(buttonSubmit);
    });
    await waitFor(() => {
      expect(screen.getByText('User must be at least 2 characters long')).toBeVisible();
    });
    await waitFor(() => {
      expect(screen.getByText('Password must be at least 6 characters long')).toBeVisible();
    });
  });

  it('should show an error message when an invalid user is provided', async () => {
    render(<Login />);
    const buttonSubmit = screen.getByText(/login/i);
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    fireEvent.change(inputName, { target: { value: 'a' } });
    fireEvent.change(inputPassword, { target: { value: faker.string.alphanumeric(8) } });
    fireEvent.click(buttonSubmit);
    await waitFor(() => {
      expect(screen.getByText('User must be at least 2 characters long')).toBeVisible();
    });
  });

  it('should show an error message when an invalid password is provided', async () => {
    render(<Login />);
    const buttonSubmit = screen.getByText(/login/i);
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    act(() => {
      fireEvent.change(inputName, { target: { value: faker.person.firstName() } });
      fireEvent.change(inputPassword, { target: { value: '12345' } });
      fireEvent.click(buttonSubmit);
    });
    await waitFor(() => {
      expect(screen.getByText('Password must be at least 6 characters long')).toBeVisible();
    });
  });

  it('should call the handleLoginUser function when the form is submitted', async () => {
    const mockHandleLoginUser = jest.fn();
    render(<LoginForm handleLoginUser={mockHandleLoginUser} />);
    const person = {
      user: faker.person.firstName(),
      password: faker.string.alphanumeric(8)
    };
    const buttonSubmit = screen.getByText(/login/i);
    const inputName = screen.getByRole('textbox', {name: /user/i});
    const inputPassword = screen.getByPlaceholderText(/password/i);
    act(() => {
      fireEvent.change(inputName, { target: { value: person.user } });
      fireEvent.change(inputPassword, { target: { value: person.password } });
      fireEvent.click(buttonSubmit);
    });
    await waitFor(() => {
      expect(screen.queryByText('User must be at least 2 characters long')).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.queryByText('Password must be at least 6 characters long')).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(mockHandleLoginUser).toHaveBeenCalledTimes(1);
    });
  });
});
