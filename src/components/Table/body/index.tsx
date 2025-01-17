import Button from "./../../Button";
import { ITableRow } from "@/interfaces/table-row";

interface ITableBodyProps {
  data: Array<ITableRow>;
}

const TableBody: React.FC<ITableBodyProps> = ({ data }) => {
  const deleteClass = (id: string) => {
    console.log(`Deleting class with id: ${id}`);
  };

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={row.id}>
          <td className="py-2 text-center">{index + 1}</td>
          <td className="py-2 text-center">{row.name}</td>
          <td className="py-2 text-center flex justify-center gap-2">
            <Button theme="yellow" link="/class/123" cn="px-2 py-1">
              Vizualize
            </Button>
            {/* <Button theme="yellow" link={`/class/${row.id}`} cn="px-2 py-1">Vizualize</Button> */}
            <Button
              theme="red"
              cn="px-2 py-1"
              onClick={() => deleteClass(row.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
