import Button from "./../../../components/Button";
import Table from "./../../../components/Table";
import { ITableRow } from "@/interfaces/table-row";
import { faker } from "@faker-js/faker";


const Class = ({ params }: {
  params: {
    id: string;
  }
}) => {
  const data: Array<ITableRow> = [
    {
      id: "123",
      name: faker.commerce.department(),
    },
    {
      id: "234",
      name: faker.commerce.department(),
    },
    {
      id: "345",
      name: faker.commerce.department(),
    },
  ];
  const current = data.find((item) => item.id === params.id);
  console.log(current);

  const dataClass: Array<ITableRow> = [
    {
      id: faker.string.uuid(),
      name: faker.lorem.word(),
    },
    {
      id: faker.string.uuid(),
      name: faker.lorem.word(),
    },
    {
      id: faker.string.uuid(),
      name: faker.lorem.word(),
    },
  ];

  return (
    <main className="w-main m-auto max-w-mainx py-10">
      <div className="flex justify-end mb-4">
        <Button theme="green" cn="w-fit">Add Activity</Button>
      </div>
      <Table title="Activities List" name="Activity Name" data={dataClass} />
    </main>
  );
}

export default Class;
