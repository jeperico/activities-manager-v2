'use client'

import React from "react";
import Button from "./../Button";
import { ITableRow } from "@/interfaces/table-row";

interface ITableProps {
  title: string;
}

const Table: React.FC<ITableProps> = ({
  title,
}) => {
  const data: Array<ITableRow> = [
    {
      id: '123',
      name: 'DS1',
    },
    {
      id: '234',
      name: 'DS3',
    },
    {
      id: '345',
      name: 'DS4',
    },
    {
      id: '456',
      name: 'DS5',
    },
  ]

  return (
    <div className="bg-white p-8 rounded shadow w-full">
      <h2 className="text-xl mb-4 text-center font-bold">{title}</h2>
      <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Número</th>
              <th className="py-2">Nome da Turma</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
              {data.map((row, index) => (
              <tr key={row.id}>
                <td className='py-2 text-center'>{index + 1}</td>
                <td className='py-2 text-center'>{row.name}</td>
                <td className='py-2 text-center flex justify-center gap-2'>
                  <Button theme="yellow" link="gotoactivity" cn="px-2 py-1">Visualizar</Button>
                  <Button theme="red" cn="px-2 py-1">Excluir</Button>
                </td>
              </tr>
              ))}
          </tbody>
      </table>
  </div>
  )
};

export default Table;
