'use client';

import React from 'react';

import { ITableRow } from '@/interfaces/table-row';
import TableBody from './body';
import TableHeader from './header';

interface ITableProps {
  title: string;
  name: string;
  data: Array<ITableRow>;
}

const Table: React.FC<ITableProps> = ({ title, name, data }) => {
  return (
    <div className="bg-white p-8 rounded shadow w-full">
      <h2 className="text-xl mb-4 text-center font-bold">{title}</h2>
      <table className="min-w-full bg-white">
        <TableHeader col1="Númber" col2={name} col3="Actions" />
        <TableBody data={data} />
      </table>
    </div>
  );
};

export default Table;
