import { render, screen } from '@testing-library/react';
import { ITableRow } from '@/interfaces/table-row';
import { faker } from '@faker-js/faker';
import '@testing-library/jest-dom';

import Table from '.';

describe('Table', () => {
  it('should render the table', () => {
    // Arrange
    const data: Array<ITableRow> = [
      {
        id: faker.string.uuid(),
        name: 'Class 1',
      },
      {
        id: faker.string.uuid(),
        name: 'Class 2',
      },
    ];
    render(<Table title="Class List" name="Class Name" data={data} />);

    // Act
    const tableTitle = screen.getByRole('heading', { name: /class list/i });
    const table = screen.getByRole('table');

    // Assert
    expect(tableTitle).toBeVisible();
    expect(table).toBeVisible();
  });

  it('should render table rows', () => {
    // Arrange
    const data: Array<ITableRow> = [
      {
        id: faker.string.uuid(),
        name: 'Class 1',
      },
      {
        id: faker.string.uuid(),
        name: 'Class 2',
      },
    ];
    render(<Table title="Class List" name="Class Name" data={data} />);

    // Act
    const rows = screen.getAllByRole('row');

    // Assert
    expect(rows).toHaveLength(3);
  });

  it('should render correct data in table cells', () => {
    // Arrange
    const data: Array<ITableRow> = [
      {
        id: faker.string.uuid(),
        name: 'Class 1',
      },
      {
        id: faker.string.uuid(),
        name: 'Class 2',
      },
    ];
    render(<Table title="Class List" name="Class Name" data={data} />);

    // Act
    const firstRowCells = screen.getAllByRole('cell', { name: /class 1/i });
    const secondRowCells = screen.getAllByRole('cell', { name: /class 2/i });

    // Assert
    expect(firstRowCells).toHaveLength(1);
    expect(secondRowCells).toHaveLength(1);
  });

  // it('should call the correct function when buttons are clicked', () => {
  //   // Arrange
  //   const data: Array<ITableRow> = [
  //     {
  //       id: faker.string.uuid(),
  //       name: "Class 1",
  //     },
  //     {
  //       id: faker.string.uuid(),
  //       name: "Class 2",
  //     },
  //   ];
  //   const mockDelete = jest.fn();
  //   render(<Table title="Class List" name="Class Name" data={data} onDelete={mockDelete} />);

  //   // Act
  //   const deleteButtons = screen.getAllByText(/delete/i);
  //   fireEvent.click(deleteButtons[0]);

  //   // Assert
  //   expect(mockDelete).toHaveBeenCalledTimes(1);
  // });
});
