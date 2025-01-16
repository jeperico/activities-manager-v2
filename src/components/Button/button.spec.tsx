import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Button from ".";

describe('Button', () => {
  it('should render the button', () => {
    render(<Button theme="sesi">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeVisible();
  });

  it('should render the button with a link', () => {
    render(<Button theme="sesi" link="/home">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeVisible();
  });

  it('should render the button with a custom class', () => {
    render(<Button theme="sesi" cn="custom-class">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toHaveClass('custom-class');
  });

  it('should apply the correct theme class for "green"', () => {
    render(<Button theme="green">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toHaveClass('bg-green-500');
  });

  it('should apply the correct theme class for "red"', () => {
    render(<Button theme="red">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toHaveClass('bg-red-500');
  });

  it('should apply the correct theme class for "yellow"', () => {
    render(<Button theme="yellow">Click me</Button>);
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toHaveClass('bg-yellow-500');
  });

  it('should render a link with the correct href', () => {
    render(<Button theme="sesi" link="/about">Click me</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/about');
  });

  it('should not render a link when link prop is not provided', () => {
    render(<Button theme="sesi">Click me</Button>);
    const link = screen.queryByRole('link');
    expect(link).toBeNull();
  });
});
