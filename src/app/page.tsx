'use client'

import React from "react";
import Button from "@/components/Button";
import Table from "@/components/Table";

const Home = () => {
  return (
    <main className="w-main m-auto max-w-mainx py-10">
      <div className="flex justify-end mb-4">
        <Button theme="green" cn="w-fit">Add Class</Button>
      </div>
        <Table title="Listagem de Turmas" />
    </main>
  )
};

export default Home;
