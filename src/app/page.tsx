'use client';

import React from 'react';
import { faker } from '@faker-js/faker';
import { ITableRow } from '@/interfaces/table-row';

import Button from '@/components/Button';
import Table from '@/components/Table';

const Home = () => {
  const data: Array<ITableRow> = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.department(),
  }));

  return (
    <main className="w-main m-auto max-w-mainx py-10">
      <div className="flex justify-end mb-4">
        <Button theme="green" cn="w-fit">
          Add Class
        </Button>
      </div>
      <Table title="Class List" name="Class Name" data={data} />
    </main>
  );
};

export default Home;
