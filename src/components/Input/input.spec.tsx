import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Input from ".";

describe("Input", () => {
  it("should render the input component", () => {
    // Arrange
    const props = {
      name: "input",
      label: "Input:",
      type: "text",
      placeholder: "Enter your input...",
      register: jest.fn(),
      errors: undefined,
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByRole("textbox", { name: /input/i });
    const label = screen.getByText(/input:/i);

    // Assert
    expect(input).toBeVisible();
    expect(label).toBeVisible();
  });

  it("should render the input component with error", () => {
    // Arrange
    const props = {
      name: "input",
      label: "Input:",
      type: "text",
      placeholder: "Enter your input...",
      register: jest.fn(),
      errors: { type: "required", message: "This is an error" },
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByRole("textbox", { name: /input/i });
    const label = screen.getByText(/input:/i);
    const error = screen.getByText("This is an error");

    // Assert
    expect(input).toBeVisible();
    expect(label).toBeVisible();
    expect(error).toBeVisible();
  });

  it("should call register function on input change", () => {
    // Arrange
    const registerMock = jest.fn();
    const props = {
      name: "input",
      label: "Input:",
      type: "text",
      placeholder: "Enter your input...",
      register: registerMock,
      errors: undefined,
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByRole("textbox", { name: /input/i });
    fireEvent.change(input, { target: { value: "test" } });

    // Assert
    expect(registerMock).toHaveBeenCalled();
  });

  it("should render the input component with a placeholder", () => {
    // Arrange
    const props = {
      name: "input",
      label: "Input:",
      type: "text",
      placeholder: "Enter your input...",
      register: jest.fn(),
      errors: undefined,
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByPlaceholderText("Enter your input...");

    // Assert
    expect(input).toBeVisible();
  });

  it("should render the input component with a different type", () => {
    // Arrange
    const props = {
      name: "password",
      label: "Password:",
      type: "password",
      placeholder: "Enter your password...",
      register: jest.fn(),
      errors: undefined,
    };
    render(<Input {...props} />);

    // Act
    const input = screen.getByPlaceholderText("Enter your password...");

    // Assert
    expect(input).toHaveAttribute("type", "password");
  });
});
