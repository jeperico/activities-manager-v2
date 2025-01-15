import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Table from '.';

describe('Table', () => {
  it('should render the table', () => {
    // Arrange
    render(<Table title="Turmas" />);

    // Act
    const tableTitle = screen.getByRole('heading', {name: /turmas/i});
    const table = screen.getByRole('table');

    // Assert
    expect(tableTitle).toBeVisible();
    expect(table).toBeVisible();
  });
});
