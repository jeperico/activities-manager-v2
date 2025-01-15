/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Button from ".";


describe('Button', () => {
  it('should render the button', () => {
    // Arrange
    render(<Button theme="sesi">Click me</Button>);

    // Act
    const button = screen.getByRole('button', {name: /click me/i});

    // Assert
    expect(button).toBeVisible();
  });

  it('should render the button with a link', () => {
    // Arrange
    render(<Button theme="sesi" link="/home">Click me</Button>);

    // Act
    const button = screen.getByRole('button', {name: /click me/i});

    // Assert
    expect(button).toBeVisible();
  });

  it('should render the button with a custom class', () => {
    // Arrange
    render(<Button theme="sesi" cn="custom-class">Click me</Button>);

    // Act
    const button = screen.getByRole('button', {name: /click me/i});

    // Assert
    expect(button).toHaveClass('custom-class');
  });
});
