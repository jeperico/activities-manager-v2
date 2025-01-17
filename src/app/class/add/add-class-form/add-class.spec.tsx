import { faker } from '@faker-js/faker';
import '@testing-library/jest-dom';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';

import AddClassForm from '.';
import AddClass from '../page';

describe('Add Class Form', () => {
  it('should render the class form', () => {
    render(<AddClass />);
    const formTitle = screen.getByRole('heading', { name: /new class/i });
    const inputName = screen.getByRole('textbox', { name: /class/i });
    const buttonSubmit = screen.getByRole('button', { name: /register/i });
    expect(formTitle).toBeVisible();
    expect(inputName).toBeVisible();
    expect(buttonSubmit).toBeVisible();
  });

  it('should show an error message when field is not provided', async () => {
    render(<AddClass />);
    const buttonSubmit = screen.getByText(/register/i);
    act(() => {
      fireEvent.click(buttonSubmit);
    });
    await waitFor(() => {
      expect(
        screen.getByText('Class must be at least 2 characters long')
      ).toBeVisible();
    });
  });

  it('should show an error message when an invalid class name is provided', async () => {
    render(<AddClass />);
    const buttonSubmit = screen.getByText(/register/i);
    const inputName = screen.getByRole('textbox', { name: /class/i });
    fireEvent.change(inputName, { target: { value: 'a' } });
    fireEvent.click(buttonSubmit);
    await waitFor(() => {
      expect(
        screen.getByText('Class must be at least 2 characters long')
      ).toBeVisible();
    });
  });

  it('should call the handleClassName function when the form is submitted', async () => {
    const mockHandleClassName = jest.fn();
    render(<AddClassForm handleClassName={mockHandleClassName} />);
    const buttonSubmit = screen.getByText(/register/i);
    const inputName = screen.getByRole('textbox', { name: /class/i });
    act(() => {
      fireEvent.change(inputName, {
        target: { value: faker.commerce.department() },
      });
      fireEvent.click(buttonSubmit);
    });
    await waitFor(() => {
      expect(
        screen.queryByText('User must be at least 2 characters long')
      ).not.toBeInTheDocument();
    });
    await waitFor(() => {
      expect(mockHandleClassName).toHaveBeenCalledTimes(1);
    });
  });
});
