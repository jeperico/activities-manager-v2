'use client'

import React from "react";

import Button from "./../Button";
import { ITableRow } from "@/interfaces/table-row";

interface ITableProps {
  title: string;
  name: string;
  data: Array<ITableRow>;
}

const Table: React.FC<ITableProps> = ({
  title,
  name,
  data,
}) => {

  return (
    <div className="bg-white p-8 rounded shadow w-full">
      <h2 className="text-xl mb-4 text-center font-bold">{title}</h2>
      <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Númber</th>
              <th className="py-2">{name}</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
              {data.map((row, index) => (
                <tr key={row.id}>
                  <td className='py-2 text-center'>{index + 1}</td>
                  <td className='py-2 text-center'>{row.name}</td>
                  <td className='py-2 text-center flex justify-center gap-2'>
                    <Button theme="yellow" link="gotoactivity" cn="px-2 py-1">Vizualize</Button>
                    <Button theme="red" cn="px-2 py-1">Delete</Button>
                  </td>
                </tr>
              ))}
          </tbody>
      </table>
    </div>
  )
};

export default Table;
